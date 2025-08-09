import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const currentClasses = [
    {
      code: "2.145",
      link: "https://meche.mit.edu/featured-classes/design-compliant-mechanisms-machines-systems",
      name: "Design of Compliatne Mechanisms, Machines, & Systems",
      description: "Design, modeling and integration of compliance into systems that enable performance which is impractical to obtain via rigid mechanisms.",
    },
    {
      code: "2.009",
      link: "https://meche.mit.edu/featured-classes/product-engineering-process",
      name: "Product Engineering Process",
      description: "Experience working in teams to design and construct high-quality product prototypes while deveoping an understanding of product development.",
    },
    {
      code: "2.96",
      link: "https://orbit.mit.edu/classes/management-in-engineering-2.96",
      name: "Management in Engineering",
      description: "Focus on building individual skills in leadership, communication, and project management.",
    },
  ]

  const skills = [
    "SolidWorks",
    "Fusion 360",
    "Python",
    "Arduino IDE",
    "MATLAB",
    "CAD",
    "CAM",
    "3D Printing (FDM/SLS/SLA)",
    "Mill",
    "Lathe",
    "Laser Cutter",
    "Injection Molding",
    "KiCad",
    //"PCB Design"
  ]

  const coursework = [
    {
      code: "2.671",
      link: "https://meche.mit.edu/featured-classes/measurement-and-instrumentation",
      name: "Measurement and Instrumentation",
      description: "Experimental techniques for mechanical engineering research and development.",
    },
    {
      code: "2.750",
      link: "https://meddevdesign.mit.edu/",
      name: "Medical Device Design",
      description: "Design and development of medical devices to address healthcare challenges.",
    },
    {
      code: "2.679",
      link: "https://meche.mit.edu/featured-classes/electronics-mechanical-systems-ii",
      name: "Electronics for Mechanical System II",
      description: "Advanced electronics integration in mechanical systems and applications, with a focus on PCB design.",
    },
    {
      code: "2.008",
      link: "https://meche.mit.edu/featured-classes/design-and-manufacturing-ii",
      name: "Design and Manufacturing II",
      description:
        "Applied DFA and DFM principles to design and manufacture 50 injection molded yo-yos in a team.",
    },
    {
      code: "2.007",
      link: "https://meche.mit.edu/featured-classes/design-and-manufacturing-i",
      name: "Design and Manufacturing I",
      description:
        "Individually designed and manufactured an aluminum robot to complete various tasks for a class competition, finishing in the top 32 of 147 students.",
    },
    {
      code: "2.001",
      link: "https://meche.mit.edu/featured-classes/mechanics-and-materials-i",
      name: "Mechanics and Materials I",
      description:
        "Problem solving for statically determinate and indeterminate systems in axial loading, torsion, and bending.",
    },
    {
      code: "4.021",
      link: "https://architecture.mit.edu/classes",
      name: "How to Design",
      description: "Dundamental design principles to demystify design and provide a basic introduction to all aspects of the design process.",
    },
    {
      code: "2.678",
      link: "https://meche.mit.edu/featured-classes/electronics-mechanical-systems",
      name: "Electronics for Mechanical Systems",
      description: "Integration of electronics in mechanical systems design.",
    },
    {
      code: "2.003/4",
      link: "https://meche.mit.edu/featured-classes/dynamics-and-control-i",
      name: "Dynamics and Controls I & II",
      description: "Analysis and design of dynamic systems with feedback control.",
    },
    {
      code: "2.005",
      link: "https://meche.mit.edu/featured-classes/thermal-fluids-engineering-i",
      name: "Thermal-Fluids I",
      description: "Fundamentals of thermodynamics and fluid mechanics.",
    },
  ]

  return (
    <div className="mx-auto max-w-[1400px] px-8 md:px-12 py-12 md:py-16 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Senior at MIT studying Mechanical Engineering & Product Design.
          </p>
          <p className="mb-6">
            I'm currently pursuing a Bachelor of Science in Mechanical Engineering at MIT with a concentration in Product Design. My
            academic journey has equipped me with strong skills in mechanical design, manufacturing processes, and
            engineering analysis.
          </p>
          <p className="mb-6">
            I'm particularly interested in the intersection of mechanical engineering with design for manufacturing & assembly (DFM/DFA) and product development.
          </p>
          <p>
            Experience In: consumer electronics, injection molding processes, and product development.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="../Site_Images/Servando_Headshot.jpg" alt="Servando Avalos" fill className="object-cover" style={{ objectPosition: '70% center' }} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Current Coursework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentClasses.map((course) => (
            <Card key={course.code}>
              <CardHeader>
                <CardTitle><a href={course.link}>{course.code}</a></CardTitle>
                <CardDescription><a href={course.link}>{course.name}</a></CardDescription>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Previous Coursework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursework.map((course) => (
            <Card key={course.code} className="h-full">
              <CardHeader>
                <CardTitle><a href={course.link}>{course.code}</a></CardTitle>
                <CardDescription><a href={course.link}>{course.name}</a></CardDescription>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm py-1">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="mt-4">
          <Badge variant="outline" className="text-sm py-1">
            Fluent in Spanish
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Awards & Recognitions</h2>
        <ul className="space-y-2">
          <li className="flex items-baseline gap-2">
            <Badge variant="outline" className="shrink-0">
              2022-2025
            </Badge>
            <span>Texas Petrochemicals Group Mark of Excellence Scholarship</span>
          </li>
          <li className="flex items-baseline gap-2">
            <Badge variant="outline" className="shrink-0">
              2023
            </Badge>
            <span>Lockheed Martin MIT IACME Prize</span>
          </li>
          <li className="flex items-baseline gap-2">
            <Badge variant="outline" className="shrink-0">
              2022
            </Badge>
            <span>Blue Origin MIT IACME Prize</span>
          </li>
          <li className="flex items-baseline gap-2">
            <Badge variant="outline" className="shrink-0">
              2022
            </Badge>
            <span>Phi Beta Kappa Alumni Association of Greater Houston Scholarship</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

