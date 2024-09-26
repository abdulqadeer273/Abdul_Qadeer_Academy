import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = ({themeColor}) => {
  return (
    <footer className="w-full text-white">
      <div className="py-12 px-6 md:px-12" style={{ backgroundColor: themeColor }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-3xl hover:opacity-75"><FaFacebookF /></a>
                  <a href="#" className="text-3xl hover:opacity-75"><FaInstagram /></a>
                  <a href="#" className="text-3xl hover:opacity-75"><FaYoutube /></a>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-3">Team working hours</h4>
                <p className="text-base">9 am till 11 pm PST</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">About Us</h4>
              <p className="text-base">This website is designed to help people who find difficulty in learning Arabic language/grammar, though they really want to learn Arabic language and want to understand the book of Allah.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-base">
                <li><a href="#" className="hover:underline">Books</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Connect</h4>
              <ul className="space-y-3 text-base">
                <li>+92 3265473350</li>
                <li>+92 3085085912</li>
                <li>Info@thearabicguide.com</li>
                <li>75-B , Street 15, G-9/2, Islamabad.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base">Copyright © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
