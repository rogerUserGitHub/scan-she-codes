import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Share2, Heart, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            About ScanSheCan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating inspiring women through digital discovery and physical visibility
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              ScanSheCan bridges the digital and physical worlds to celebrate the extraordinary women 
              who have shaped our history and continue to inspire our future. Through scannable QR code 
              stickers, we bring their stories into everyday spaces, making inspiration accessible wherever you are.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every woman featured here represents courage, innovation, and the power to change the world. 
              By sharing their stories through QR codes, we create a network of inspiration that spreads 
              organically through communities, schools, workplaces, and public spaces.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-primary" />
                Discover
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Browse through profiles of inspiring women from different regions, 
                time periods, and fields of achievement. Filter by interest to find 
                stories that resonate with you.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <QrCode className="w-5 h-5 text-primary" />
                Generate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create custom QR codes for any hero's story. Choose your size, 
                download the image, or generate a printable PDF perfect for 
                sticker printing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Share2 className="w-5 h-5 text-primary" />
                Share
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Place QR stickers in your community, share them with friends, 
                or use them in educational settings. Every scan spreads inspiration 
                and celebrates women's achievements.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Use QR Stickers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Perfect for:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Classrooms and educational displays</li>
                <li>Office spaces and community boards</li>
                <li>Library displays and book recommendations</li>
                <li>Notebooks, laptops, and personal items</li>
                <li>Event materials and conference swag</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Printing Tips:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Use the PDF export for best printing quality</li>
                <li>Print on sticker paper or regular paper with adhesive backing</li>
                <li>Ensure good contrast - QR codes work best on light backgrounds</li>
                <li>Test scan before printing large quantities</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Credits */}
        <Card>
          <CardHeader>
            <CardTitle>Credits & Acknowledgments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              ScanSheCan is built with love using modern web technologies. Hero portraits 
              are sourced from historical archives and creative commons collections where available.
            </p>
            <p className="text-muted-foreground text-sm">
              This project is open source and designed to be freely shared. All QR codes 
              link directly to public pages on this website. No tracking or analytics 
              are collected from QR code scans.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};