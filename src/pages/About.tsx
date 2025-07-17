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
            <CardTitle>Stickerim and Activism</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
          <p className="text-muted-foreground mb-4">
          Stickers have been a bold and simple tool for activism for decades. Affordable and easy to spread, they helped movements—from civil rights to feminism—get their messages out fast and loud. Stickers turn everyday places into stages for change, making ideas visible and sparking conversations.
            </p>
            <p className="text-muted-foreground text-sm">

            Today, stickerism is evolving with technology. QR code stickers connect the physical world to online stories, letting people dive deeper with just a scan. This blend of old-school grit and new tech makes activism more accessible and powerful than ever—one sticker at a time.
            </p>
            <div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};