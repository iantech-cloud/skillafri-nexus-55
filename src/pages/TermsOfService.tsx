import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using SkillAfrica Limited's platform and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SkillAfrica Limited provides a platform that connects businesses with African tech talent, offers development services, cybersecurity solutions, academic support, and maintains a developer community hub. Our services are designed to facilitate digital transformation and professional growth.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Registration</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Account Security</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree not to use our services for any unlawful or prohibited activities, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Violating any applicable laws or regulations</li>
                    <li>Infringing on intellectual property rights</li>
                    <li>Transmitting harmful or malicious content</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Interfering with the proper functioning of our platform</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, features, and functionality of our platform are owned by SkillAfrica Limited and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Fees</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Certain services may require payment of fees. All fees are non-refundable unless otherwise specified in writing.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Billing</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You agree to pay all charges incurred by your account. We reserve the right to suspend or terminate services for non-payment.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, SkillAfrica Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without prior notice, for any reason, including if you breach these Terms of Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Service are governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of Kenyan courts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-medium">SkillAfrica Limited</p>
                    <p>Email: legal@skillafrica.online</p>
                    <p>Address: Nairobi, Kenya</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;