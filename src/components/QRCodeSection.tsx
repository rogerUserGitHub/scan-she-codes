import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, Download, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';

interface QRCodeSectionProps {
  heroName: string;
  heroId: string;
  heroImageUrl: string;
}

export const QRCodeSection = ({ heroName, heroId, heroImageUrl }: QRCodeSectionProps) => {
  const [qrSize, setQrSize] = useState('256');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const qrUrl = `${window.location.origin}/heroes/${heroId}`;

  useEffect(() => {
    generateQRCode();
  }, [qrSize, heroId, heroImageUrl]);

  const generateQRCode = async () => {
    try {
      const size = parseInt(qrSize);
      
      // Debug: Log the URL being encoded
      console.log('QR Code URL:', qrUrl);
      
      // Generate the base QR code with hex colors
      const qrDataUrl = await QRCode.toDataURL(qrUrl, {
        width: size,
        margin: 2,
        color: {
          dark: '#2d9cdb', // Teal color in hex
          light: '#ffffff'
        },
        errorCorrectionLevel: 'H' // High error correction allows for center image
      });

      // Create a canvas to composite the QR code with hero image and name
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size with extra space for text
      const totalHeight = size + 40; // Extra space for name text
      canvas.width = size;
      canvas.height = totalHeight;

      // Draw the QR code
      const qrImg = new Image();
      qrImg.crossOrigin = 'anonymous';
      await new Promise((resolve) => {
        qrImg.onload = resolve;
        qrImg.src = qrDataUrl;
      });
      
      ctx.drawImage(qrImg, 0, 0, size, size);

      // Add hero image in center - make it smaller to preserve QR functionality
      const heroImg = new Image();
      heroImg.crossOrigin = 'anonymous';
      await new Promise((resolve) => {
        heroImg.onload = resolve;
        heroImg.src = heroImageUrl;
      });

      // Create circular crop for hero image - increased to 30%
      const centerSize = size * 0.30; // 30% of QR code size
      const centerX = size / 2;
      const centerY = size / 2;
      
      // Draw white circle background with border
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerSize / 2 + 3, 0, 2 * Math.PI);
      ctx.fill();
      
      // Add border around the circle
      ctx.strokeStyle = '#2d9cdb';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw hero image in circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerSize / 2, 0, 2 * Math.PI);
      ctx.clip();
      ctx.drawImage(
        heroImg,
        centerX - centerSize / 2,
        centerY - centerSize / 2,
        centerSize,
        centerSize
      );
      ctx.restore();

      // Add hero name at bottom
      ctx.fillStyle = '#2d9cdb'; // Teal color in hex
      ctx.font = 'bold 14px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(heroName, size / 2, size + 25);

      // Convert canvas to data URL
      const finalDataUrl = canvas.toDataURL('image/png');
      setQrDataUrl(finalDataUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
      // Fallback to simple QR code if image loading fails
      const size = parseInt(qrSize);
      const dataUrl = await QRCode.toDataURL(qrUrl, {
        width: size,
        margin: 2,
        color: {
          dark: '#2d9cdb', // Teal color in hex
          light: '#ffffff'
        },
        errorCorrectionLevel: 'H'
      });
      setQrDataUrl(dataUrl);
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(qrUrl);
    toast({
      title: 'URL Copied!',
      description: 'The link has been copied to your clipboard.',
    });
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = `${heroId}-qr-code.png`;
    link.href = qrDataUrl;
    link.click();
    
    toast({
      title: 'QR Code Downloaded!',
      description: 'The QR code has been saved to your device.',
    });
  };

  const exportPDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    // Center the content
    const qrSizeMm = 50; // 50mm square
    const x = (pageWidth - qrSizeMm) / 2;
    const y = (pageHeight - qrSizeMm) / 2 - 20;
    
    // Add title
    pdf.setFontSize(20);
    pdf.setTextColor(45, 156, 219); // Teal color in RGB
    const titleWidth = pdf.getTextWidth(heroName);
    pdf.text(heroName, (pageWidth - titleWidth) / 2, y - 10);
    
    // Add QR code
    if (qrDataUrl) {
      pdf.addImage(qrDataUrl, 'PNG', x, y, qrSizeMm, qrSizeMm);
    }
    
    // Add tagline
    pdf.setFontSize(12);
    const tagline = `Scan to learn about ${heroName}`;
    const taglineWidth = pdf.getTextWidth(tagline);
    pdf.text(tagline, (pageWidth - taglineWidth) / 2, y + qrSizeMm + 15);
    
    // Add website URL
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    const urlWidth = pdf.getTextWidth('ScanSheCan.app');
    pdf.text('ScanSheCan.app', (pageWidth - urlWidth) / 2, y + qrSizeMm + 25);
    
    pdf.save(`${heroId}-sticker.pdf`);
    
    toast({
      title: 'PDF Generated!',
      description: 'Your printable sticker is ready.',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Share {heroName}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          {qrDataUrl && (
            <div className="inline-block p-4 bg-white rounded-lg shadow-sm max-w-full">
              <img 
                src={qrDataUrl} 
                alt={`QR code for ${heroName}`}
                className="mx-auto max-w-full h-auto"
                style={{ maxWidth: qrSize + 'px' }}
              />
            </div>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Scan to learn about {heroName}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">QR Code Size</label>
            <Select value={qrSize} onValueChange={setQrSize}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="128">Small (128px)</SelectItem>
                <SelectItem value="256">Medium (256px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={copyUrl} className="flex-1">
                <Copy className="w-4 h-4 mr-2" />
                Copy URL
              </Button>
              <Button variant="outline" onClick={downloadQR} className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download QR
              </Button>
            </div>
            <Button onClick={exportPDF} variant="gradient" className="w-full">
              <FileText className="w-4 h-4 mr-2" />
              Print Sticker
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};