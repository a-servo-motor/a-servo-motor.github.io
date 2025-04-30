import { notFound } from "next/navigation"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or CMS
const projects = {
  "safecase-kulr": {
    title: "SafeCASE - KULR Technology",
    description: "Created an updated CAD design and drawings for a lithium-ion battery safety storage case.",
    fullDescription: `
      As a Prototyping and Testing Engineering Intern at KULR Technology, I led the development of an updated CAD design for a lithium-ion battery safety storage case. The project involved:

      • Creating a new parametric model that allows for easy updates to measurements
      • Implementing sheet metal features in SolidWorks to represent fabric and fire-resistant materials
      • Developing detailed technical drawings and a comprehensive Bill of Materials
      • Producing commercial-grade renders for product presentation

      The resulting design serves as a base file for similar products and has been implemented in the company's product line.
    `,
    image: "/placeholder.svg?height=600&width=800",
    tags: ["SolidWorks", "Sheet Metal Design", "Technical Drawing", "Bill of Materials"],
    date: "Summer 2024",
  },
  "bb2590-battery-pack": {
    title: "BB-2590 Battery Pack - KULR Technology",
    description: "Designed a prototype 3p4s battery pack assembly according to MIL-SPEC standards.",
    fullDescription: `
      During my internship at KULR Technology, I designed a prototype battery pack that met military specifications:

      • Led the research and design of a BB-2590 lithium-ion battery pack
      • Implemented injection molding design techniques in SolidWorks
      • Created a working assembly using 18650 lithium-ion cells
      • Developed the case prototype using SLS printing technology
      • Ensured compliance with military standards throughout the design process

      The project resulted in a functional prototype that demonstrated the feasibility of the design for military applications.
    `,
    image: "/placeholder.svg?height=600&width=800",
    tags: ["SolidWorks", "Injection Molding", "Prototyping", "Battery Design"],
    date: "Summer 2024",
  },
  "electroaerodynamic-thruster": {
    title: "ElectroAerodynamic Thruster Prototype - MIT LAE",
    description: "Manufactured prototype for multi-stage ducted thruster research.",
    fullDescription: `
      As an Undergraduate Researcher at MIT's Laboratory for Aviation and the Environment:

      • Manufactured a single-stage thruster integral to advancing fixed-wing ionic aircraft propulsion research
      • Designed and prototyped enhanced components using SolidWorks
      • Identified and addressed critical failure points to improve structural reliability
      • Utilized laser cutting and water jetting techniques for precise component manufacturing
      • Created an updated version that was more lightweight while maintaining structural integrity

      This research contributed to the advancement of ionic propulsion technology for aircraft applications.
    `,
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Laser Cutting", "Water Jetting", "SolidWorks", "Prototyping"],
    date: "2023-2024",
  },
  "design-manufacturing": {
    title: "2.008 Design & Manufacturing II - MIT",
    description: "Led team project to design and manufacture injection-molded yo-yos.",
    fullDescription: `
      As part of MIT's Design and Manufacturing II course (2.008), I worked in a team to design and manufacture yo-yos:

      • Applied Design for Assembly (DFA) and Design for Manufacturing (DFM) principles
      • Developed injection molding processes for mass production of 100 units
      • Created detailed engineering analysis including FEA and mold flow simulations
      • Implemented quality control measures throughout the manufacturing process
      • Successfully produced and assembled functional yo-yos meeting all design specifications

      The project provided hands-on experience with industrial manufacturing processes and team collaboration.
    `,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24_2.008-55.JPG-Wk0AShBb2ee4HX1Nl72AOWVpnUpz35.jpeg",
    tags: ["Injection Molding", "DFM", "DFA", "Manufacturing"],
    date: "Fall 2024",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <span>{project.date}</span>
          </div>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              {project.fullDescription.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

