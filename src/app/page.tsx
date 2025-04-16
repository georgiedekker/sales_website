'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold">RaiseMyTickets.com</div>
            {/* Navigation buttons hidden for now
            <div className="space-x-4">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700">Features</Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700">Benefits</Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700">Process</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-800">Contact Us</Button>
            </div>
            */}
          </nav>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Simplify Enterprise Ticket Management</h1>
              <p className="text-xl mb-8">Unify your support channels, eliminate confusion, and resolve tickets faster with our AI-powered platform.</p>
              <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                Request Demo
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-md">
                <h3 className="text-2xl font-semibold mb-4">Trusted by Global Leaders</h3>
                <p className="mb-4">Join the growing number of Fortune 500 companies streamlining their support operations with RaiseMyTickets.com</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/20 h-12 rounded-md"></div>
                  <div className="bg-white/20 h-12 rounded-md"></div>
                  <div className="bg-white/20 h-12 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Enterprise Leaders Choose RaiseMyTickets.com</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Unified Ticketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A single, consistent interface for all service requests eliminates employee confusion and increases adoption.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Omnichannel Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Employees can reach support via chat, email, or phone - no multiple logins or confusing ticket forms.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Higher Quality Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our AI ensures complete information capture from the first interaction, enabling faster resolution.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Faster Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Properly formatted and routed tickets with all necessary details lead to significantly reduced resolution times.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Comprehensive Service Coverage</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">RaiseMyTickets.com handles all your service categories through one unified platform:</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">IT Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>From password resets to complex technical issues, our platform ensures proper routing and resolution of all IT support requests.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-800">HR Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Handle benefit inquiries, policy questions, and employee requests with proper approvals and confidentiality.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Facility Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Maintenance requests, workspace issues, and other facility needs are captured with precise details and routed appropriately.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How RaiseMyTickets.com Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Employee Contact</h3>
              <p>Employee reaches out via their preferred channel (chat, email, phone, MS Teams, Slack).</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">AI Interaction</h3>
              <p>Our AI Agent collects all required information in a natural conversation.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Ticket Creation</h3>
              <p>A properly formatted ticket is created and routed to the appropriate ticketing platform.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Efficient Resolution</h3>
              <p>The qualified request is resolved quickly without the need for the ticket handler to reach back out to the ticket issuer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-white">Streamlined Our Support Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">"RaiseMyTickets.com transformed how our employees interact with internal support services. Ticket resolution times improved by 35% in the first quarter."</p>
                <p className="font-semibold">— CIO, Global Manufacturing Corporation</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-white">Employee Satisfaction Increased</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">"Our employees no longer need to figure out which system to use for different requests. Satisfaction scores for internal services improved dramatically."</p>
                <p className="font-semibold">— HR Director, International Financial Services</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-white">Seamless Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">"The onboarding process was thorough and efficient. The RaiseMyTickets team understood our complex needs and configured the system perfectly."</p>
                <p className="font-semibold">— Operations Manager, Technology Enterprise</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your service management?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Join the growing number of leading enterprises who trust RaiseMyTickets.com to handle their service requests with efficiency and precision.</p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request a Demo
            </Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">RaiseMyTickets.com</h3>
              <p className="text-slate-400">Simplifying enterprise support through unified, AI-powered ticket management.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#" className="hover:text-white">IT Support</Link></li>
                <li><Link href="#" className="hover:text-white">HR Services</Link></li>
                <li><Link href="#" className="hover:text-white">Facility Management</Link></li>
                <li><Link href="#" className="hover:text-white">Custom Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} RaiseMyTickets.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 