
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="relative overflow-hidden py-16 md:py-24 bg-muted/30">
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our superbikes or services? We're here to help.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <address className="text-muted-foreground not-italic">
                      IndiBikes HQ<br />
                      123 Motorcycle Lane<br />
                      Mumbai, Maharashtra 400001
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@indibikes.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Hours of Operation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-muted/20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-6">Our Showrooms</h2>
              <p className="text-muted-foreground">
                Visit one of our premium showrooms across India to see our superbikes in person.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-2">Mumbai (Flagship)</h3>
                <address className="text-muted-foreground not-italic mb-4">
                  123 Motorcycle Lane<br />
                  Mumbai, Maharashtra 400001
                </address>
                <p className="text-sm">Phone: +91 98765 43210</p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-2">Delhi</h3>
                <address className="text-muted-foreground not-italic mb-4">
                  456 Speedway Avenue<br />
                  New Delhi, Delhi 110001
                </address>
                <p className="text-sm">Phone: +91 98765 43211</p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-2">Bangalore</h3>
                <address className="text-muted-foreground not-italic mb-4">
                  789 Racing Street<br />
                  Bangalore, Karnataka 560001
                </address>
                <p className="text-sm">Phone: +91 98765 43212</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
