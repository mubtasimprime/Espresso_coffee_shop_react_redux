import { MapPin, Phone, Mail, Clock } from "lucide-react";
import header from "../assets/footer/footer.svg";

const Contact = () => {
  return (
    <section className="bg-[#3b2416] text-amber-50 pt-20 pb-10">
      <div className="max-w-9/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - About & Contact Info */}
          <div className="lg:w-2/5 space-y-8">
            {/* About Section */}
            <section>
              <div className="mb-2">
                <img className="h-15" src={header} alt="Footer" />
              </div>

              <div className="w-full h-px bg-amber-700"></div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-7 w-7 text-amber-300 mr-3" />
                  <div className="text-[18px]">
                    <p className="font-semibold">ADDRESS</p>
                    <p>Mirpur-1, Dhaka-1216, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-7 w-7 text-amber-300 mr-3" />
                  <div className="text-[18px]">
                    <p className="font-semibold">PHONE</p>
                    <p>+880 1989 133132</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-7 w-7 text-amber-300 mr-3" />
                  <div className="text-[18px]">
                    <p className="font-semibold">EMAIL</p>
                    <p>mubtasimfuadrafiq@gmail.com</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Coffee Shop Hours */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="h-7 w-7 mr-2 text-amber-300" />
                OPENING HOURS
              </h2>

              <div className="bg-amber-800 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Map */}
          <div className="lg:w-3/5">
            <section className="h-full">
              <h2 className="text-2xl font-bold mb-4 mt-3">VISIT US</h2>
              <div className="bg-amber-800 rounded-lg overflow-hidden shadow-lg h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.702490576647!2d90.35385844999999!3d23.794562699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1763396813912!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Coffee Shop Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-amber-300 pt-8 mt-8 border-t border-amber-700">
          <p>
            © {new Date().getFullYear()} Espresso Emporium Coffee. All rights
            reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
