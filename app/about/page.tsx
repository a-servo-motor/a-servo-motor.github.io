import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const currentClasses = [
    {
      code: "2.671",
      name: "Measurement and Instrumentation",
      description: "Experimental techniques for mechanical engineering research and development.",
    },
    {
      code: "2.750",
      name: "Medical Device Design",
      description: "Design and development of medical devices to address healthcare challenges.",
    },
    {
      code: "2.679",
      name: "Electronics for Mechanical System II",
      description: "Advanced electronics integration in mechanical systems and applications.",
    },
  ]

  const skills = [
    "SolidWorks",
    "Fusion 360",
    "Python",
    "JavaScript",
    "Arduino IDE",
    "MATLAB",
    "CAD",
    "CAM",
    "3D Printing - FDM & SLS",
    "Mill",
    "Lathe",
    "Waterjet",
    "CNC",
    "Laser Cutter",
  ]

  const coursework = [
    {
      code: "2.008",
      name: "Design and Manufacturing II",
      description:
        "Applying DFA and DFM principles to design and manufacture 100 injection molded yo-yos in a team of 5.",
    },
    {
      code: "2.007",
      name: "Design and Manufacturing I",
      description:
        "Individually designed and manufactured an aluminum robot to complete various tasks for a class competition, finishing in the top 32 of 147 students.",
    },
    {
      code: "2.001",
      name: "Mechanics and Materials I",
      description:
        "Problem solving for statically determinate and indeterminate systems in axial loading, torsion, and bending.",
    },
    {
      code: "4.021",
      name: "How to Design",
      description: "Design principles and methodologies for engineering applications.",
    },
    {
      code: "2.678",
      name: "Electronics for Mechanical Systems",
      description: "Integration of electronics in mechanical systems design.",
    },
    {
      code: "2.003/4",
      name: "Dynamics and Control I & II",
      description: "Analysis and design of dynamic systems with feedback control.",
    },
    {
      code: "2.005",
      name: "Thermal-Fluids I",
      description: "Fundamentals of thermodynamics and fluid mechanics.",
    },
  ]

  return (
    <div className="container py-12 md:py-16 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Mechanical Engineering Junior at MIT with a passion for design, prototyping, and innovation.
          </p>
          <p className="mb-6">
            I'm currently pursuing a Bachelor of Science in Mechanical Engineering at MIT with a GPA of 4.7/5.0. My
            academic journey has equipped me with strong skills in mechanical design, manufacturing processes, and
            engineering analysis.
          </p>
          <p>
            I'm particularly interested in the intersection of mechanical engineering with aerospace, defense, and
            sustainable technologies. My experience spans from battery pack design to autonomous robotics and ionic
            aircraft propulsion research.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/placeholder.svg?height=320&width=320" alt="Servando Avalos" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Current Coursework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentClasses.map((course) => (
            <Card key={course.code}>
              <CardHeader>
                <CardTitle>{course.code}</CardTitle>
                <CardDescription>{course.name}</CardDescription>
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
                <CardTitle>{course.code}</CardTitle>
                <CardDescription>{course.name}</CardDescription>
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
              2022-2024
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

