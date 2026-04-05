import { motion } from 'framer-motion'

const images = [
  {
    alt: "Beach view",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4UMRjYDyNrbM_jk9Sw6fX0ArCNTkS0c1fucaQ0zx4Dq4F1IumzH8DxGkqnLh7n_m74ht6XDxlfz3jKLOWY-nZPGU035ITAy9fwTWSxpmtOf56VUAMbbDhbLlgtS6RorvNPT7H28F3Po8tI0Yzo_tVDnSCpR8KmnJeKRC2cFaEyTyvkLMqKtkp1s1uw7jtZSw1XuJ_0nHPrdwp5y1CU_eGNyAHGD8fHGC7a95vD5ofhrtQd1ovgrJv_J1QJBou5Kl8T2I4f4dMQCY",
    cols: "col-span-1 md:col-span-2 md:row-span-2"
  },
  {
    alt: "Breakfast",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Ke6UmymhFQbL0PVWbg_80b5T03sgOPmPDUV1CqEdOsDQt09GDUHubabMMrdecTGENpf0IUWHaBHd7jtZ4nJOudNUi_WzJhLfx1GkOO9OQudCLkV8v0wrYnVH2tVIEd5PXvv0OLnq-qQv0OHVwTeR16GPtCbB9dZ_NNLwHc_yXb6YGBrzU-zkCizenSd0-dtp7v2rIbz5QgZZO-LAMvf3W9Toc7nbSN27_nt-HIx884rc8He2_LZ0DgOMO8kXJENmpXbyG7tnD9s",
    cols: "col-span-1"
  },
  {
    alt: "Yoga",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRtUc-AgYqq_8jXiyu94cff5DuzDP4MV5PCQWjhrwidMgxZhv6GViyeBWdqdw2-UYHqW10d3EjaNlU28Gg-A8puwoNXZxxP0nMDXEQcJTgDOa1-FBdTA4KvRZ_Y1mZtNYR40258c7RIJxXJGJMNqpIenbie7cBNzyOrHBmu3RVHd4C32hJxXLwC3ybXMoa_MVredVX0XmftWMEG2Mavdol832gedIfPUIzecR7l3Qh62TMgHQ63UQ5AVFzRE5DZetK6XWPUjSFEhE",
    cols: "col-span-1"
  },
  {
    alt: "Pool",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4MIERYMTy_8ZpqSPzh4fi6L5TiXX8Oo837Hm6m_6AiD7dW4ssDnMbaxZkXP0Th_4TVRUvOoV5cO7jUw2EZivr_CU5Zrps_wMPcucfnq3yPMpt4r9fZ60JMjHMzisWfYQDXk_oyZzb3YE5GiJ20J-NQcl-0WPfO1pl-c4o7BlGJBGPSEvi8sKyJIyTPhu1Gse-E6JuYXPqte1G6X_nU-hYaipAyZU2rMChs1HzoHQyl-6XOnF645f6LcdO-xqRR-EJvqLWNO9X7lo",
    cols: "col-span-1"
  },
  {
    alt: "Interior",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKCwATr5bRPRBe-4RGSwNX2-tx5EbY7WfAy3MOnOM6HrPdcDb7Ixhzqz6SutFyVO_9McuF7gY2edSjOXU-5wsul12KFRCrYVtuyt312oQNXwhSt9aAABGWT7WqkJz31myWIwVyVM7jDEIEPZlftFqAZPk3bMAkEUoXdf9Wi-9bOA9jVTcL1ZKjdd3qYH9UWv06rpMm52InanPFwEcWbgmgplfjD0G29Cyja0wGI0VKvyvbWcVg2mXrjM52BmNWeOAihYTswtCILjs",
    cols: "col-span-1"
  }
]

export default function GalleryPreview({ setCurrentPage }) {
  return (
    <section id="gallery" className="py-12 md:py-12 px-4 md:px-24 bg-surface">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 max-w-7xl mx-auto gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-2xl md:text-5xl text-primary mb-2 md:mb-4">Gallery Preview</h2>
          <p className="font-body text-secondary max-w-xl text-sm md:text-base">A visual journey through the textures and moments that define Farona.</p>
        </motion.div>
        <button 
          onClick={() => setCurrentPage('gallery')}
          className="flex items-center gap-2 text-primary font-bold group text-sm md:text-base"
        >
          View Full Gallery 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 md:gap-4 h-[500px] md:h-[500px] max-w-7xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${img.cols} rounded-lg md:rounded-xl overflow-hidden shadow-sm`}
          >
            <img 
              alt={img.alt} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
              src={img.src} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}