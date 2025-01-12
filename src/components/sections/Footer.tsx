import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import logo from "../../assets/images/logo/logo.svg"
import { RiFacebookFill, RiTwitterXFill, RiLinkedinFill, RiInstagramLine, RiYoutubeFill, RiArrowRightLine } from "@remixicon/react"
import { Link } from "react-router-dom";

interface NewsletterForm {
  email: string;
}

const socialLinks = [
  { icon: <RiFacebookFill className="text-white text-xl" />, href: "#", label: "Facebook" },
  { icon: <RiTwitterXFill className="text-white text-xl" />, href: "#", label: "Twitter" },
  { icon: <RiLinkedinFill className="text-white text-xl" />, href: "#", label: "LinkedIn" },
  { icon: <RiInstagramLine className="text-white text-xl" />, href: "#", label: "Instagram" },
  { icon: <RiYoutubeFill className="text-white text-xl" />, href: "#", label: "YouTube" }
]

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewsletterForm>();

  const onSubmit: SubmitHandler<NewsletterForm> = async (data) => {
    try {
      // Handle form submission
      console.log('Newsletter subscription:', data);
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
    }
  };

  return (
    <footer className='lg:py-100 md:py-70 py-50 bg-[#222226]'>
      <div className="container md:py-70 py-50">
        <Link to="/" aria-label="Go to homepage">
          <figure className='flex lg:mb-10 mb-6 justify-center items-center'>
            <img src={logo} alt="Finect logo" className='md:w-40 w-24' />
          </figure>
        </Link>
        <div className="flex md:flex-row flex-col-reverse justify-between md:gap-0 gap-10">
          {/* Left Section */}
          <div className="md:w-3/5">
            <div className="flex lg:flex-row flex-col justify-between">
              <div className='flex flex-col lg:gap-10 gap-5 text-white'>
                <p>Sobre nosotros</p>
                <ul className='flex flex-col lg:gap-3 gap-2'>
                  <li className='pb-4'><Link to="/inversiones" className='a font-bold'>Mejores inversiones</Link></li>
                  <li><Link to="/fondos" className='a text-[#a1a1a3] hover:text-white'>Mejores fondos de inversión</Link></li>
                  <li><Link to="/pensiones" className='a text-[#a1a1a3] hover:text-white'>Mejores planes de pensiones</Link></li>
                  <li><Link to="/etfs" className='a text-[#a1a1a3] hover:text-white'>Mejores ETFs</Link></li>
                  <li><Link to="/depositos" className='a text-[#a1a1a3] hover:text-white'>Mejores depósitos a plazo fijo</Link></li>
                  <li><Link to="/cuentas" className='a text-[#a1a1a3] hover:text-white'>Mejores cuentas remuneradas</Link></li>
                  <li><Link to="/hipotecas" className='a text-[#a1a1a3] hover:text-white'>Mejores hipotecas</Link></li>
                </ul>
              </div>
              <div className='flex flex-col lg:gap-10 gap-5 text-white'>
                <p>Contacta</p>
                <ul className='flex flex-col lg:gap-3 gap-2'>
                  <li className='pb-4'><Link to="/calculadoras" className='a font-bold'>Calculadoras financieras</Link></li>
                  <li><Link to="/perfil-inversor" className='a text-[#a1a1a3] hover:text-white'>Calcula tu perfil inversor</Link></li>
                  <li><Link to="/calculadora-largo-plazo" className='a text-[#a1a1a3] hover:text-white'>¿Cuánto puedo ganar invirtiendo a largo plazo?</Link></li>
                  <li><Link to="/calculadora-inflacion" className='a text-[#a1a1a3] hover:text-white'>Calculadora inflación: ¿cuánto valor pierden tus ahorros?</Link></li>
                  <li><Link to="/finanzas-personales" className='a text-[#a1a1a3] hover:text-white'>Calculadora finanzas personales</Link></li>
                  <li><Link to="/calculadora-hacienda" className='a text-[#a1a1a3] hover:text-white'>¿Cuánto te retiene Hacienda del sueldo?</Link></li>
                  <li><Link to="/calculadora-sueldo" className='a text-[#a1a1a3] hover:text-white'>Calculadora de sueldo neto</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/5">
            <div className="flex flex-col lg:gap-10 gap-6 md:justify-end justify-center">
              {/* Social Links */}
              <div className='flex lg:gap-3 gap-2 md:justify-end justify-center'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Newsletter Form */}
              <div className='flex flex-col lg:gap-3 gap-2 text-white md:items-end items-center'>
                <h6>Suscríbete a nuestra Newsletter</h6>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='bg-white rounded-lg flex justify-between items-center overflow-hidden w-max'
                >
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    placeholder='Introduce tu e-mail'
                    className='text-black placeholder:text-black p-2 px-4 pe-9'
                    aria-label="Email subscription input"
                  />
                  <button
                    type="submit"
                    className='bg-[#dde1f3] lg:p-3 p-2 flex justify-center items-center hover:bg-secondary hover:text-white text-black transition-colors'
                    aria-label="Subscribe to newsletter"
                  >
                    <RiArrowRightLine size={30} />
                  </button>
                </form>
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
                <p className='text-[12px] text-[#a1a1a3]'>
                  Introduce tu e-mail para registrarte en Finect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer