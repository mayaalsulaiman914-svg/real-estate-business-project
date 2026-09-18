import './Section.css'

const Section = ({className , id, children,}) => {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  )
}

export default Section
