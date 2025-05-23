import { notFound } from "next/navigation"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ImageSlider from "@/components/image-slider"

// This would typically come from a database or CMS
const projects = {
  "safecase-kulr": {
    title: "SafeCASE - KULR Technology",
    description: "Created an updated CAD design and drawings for a lithium-ion battery safety storage case.",
    fullDescription: `
      As a Prototyping and Testing Engineering Intern at KULR Technology, I led the development of an updated CAD design for a lithium-ion battery safety storage case:

      • Created a new parametric model that allowed for easy updates to new measurements
      • Implemented sheet metal features in SolidWorks to represent fabric and fire-resistant materials
      • Developed detailed technical drawings and a comprehensive Bill of Materials
      • Produced commercial-grade renders for product presentation

      The resulting design serves as a base file for similar products and has been implemented in the company's product line.
    `,
    images: ["/Site_Images/Kulr_Case.jpg", "/Site_Images/Kulr_Case_Exploded_Render.jpg", "/Site_Images/Kulr_Case_Exploded_Drawing.png"],
    tags: ["SolidWorks", "Sheet Metal Design", "Technical Drawings"],
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
      • Developed a prototype casing using SLS printing technology
      • Ensured compliance with military standards throughout the design process

      The project resulted in a functional prototype that demonstrated the feasibility of the design for military applications.
    `,
    images: ["/Site_Images/Kulr_Pack_CAD.png", "/Site_Images/Kulr_Pack_CAD_Exploded.png", "/Site_Images/Kulr_Pack_Render.jpg"],
    tags: ["SolidWorks", "Injection Molding", "Prototyping", "Battery Design"],
    date: "Summer 2024",
  },
  "electroaerodynamic-thruster": {
    title: "ElectroAerodynamic Thruster Prototype - MIT LAE",
    description: "Manufactured prototype for multi-stage ducted thruster research.",
    fullDescription: `
      As an Undergraduate Researcher at MIT's Laboratory for Aviation and the Environment:

      • Manufactured a single-stage thruster prototype integral to advancing fixed-wing ionic aircraft propulsion research
      • Designed and prototyped improved components using SolidWorks
      • Identified and addressed critical failure points to improve structural reliability
      • Utilized laser cutting and water jetting techniques for precise component manufacturing
      • Created an updated version that was more lightweight while maintaining structural integrity

      This research contributed to ongoing research for the advancement of ionic propulsion technology in aircraft applications.
    `,
    images: ["/Site_Images/EAD_CAD.png", "/Site_Images/EAD_MFG.png"],
    tags: ["Laser Cutting", "SolidWorks", "Rapid Prototyping"],
    date: "Fall 2023 - Spring 2024",
  },
  "design-manufacturing": {
    title: "Injection Molded Yo-Yos - MIT 2.008",
    description: "Led team project to design and manufacture injection-molded yo-yos.",
    fullDescription: `
      As part of MIT's Design and Manufacturing II course (2.008), I worked in a team to design and manufacture yo-yos:

      • Applied Design for Assembly (DFA) and Design for Manufacturing (DFM) principles
      • Developed injection molding processes for mass production of 50 units
      • Implemented quality control measures throughout the manufacturing process
      • Successfully produced and assembled functional yo-yos meeting design specifications

      The project provided extensive hands-on experience with industrial manufacturing processes and team collaboration.
    `,
    //• Created detailed engineering analysis including FEA and mold flow simulations

    images:
      ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24_2.008-55.JPG-Wk0AShBb2ee4HX1Nl72AOWVpnUpz35.jpeg", "/Site_Images/Yo-Yo Iso.jpg", "/Site_Images/Yo-Yo Side.jpg", "/Site_Images/Yo-Yo Front.jpg"],
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

        <ImageSlider 
          images={project.images || [project.images || "/placeholder.svg"]} 
          alt={project.title}
          className="mb-8"
        />

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

