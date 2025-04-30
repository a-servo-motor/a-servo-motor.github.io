import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    slug: "safecase-kulr",
    title: "SafeCASE - KULR Technology",
    description:
      "Created an updated CAD design and drawings for a lithium-ion battery safety storage case. Developed a new parametric model allowing for easily updating model measurements and being used as a base file for other similar designs.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["SolidWorks", "Sheet Metal Design", "Technical Drawing"],
    date: "Summer 2024",
  },
  {
    slug: "bb2590-battery-pack",
    title: "BB-2590 Battery Pack - KULR Technology",
    description:
      "Designed a prototype 3p4s battery pack assembly according to MIL-SPEC standards and ideal injection molding processes. Created a CAD model and SLS printed case prototype.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["SolidWorks", "Injection Molding", "Prototyping"],
    date: "Summer 2024",
  },
  {
    slug: "electroaerodynamic-thruster",
    title: "ElectroAerodynamic Thruster Prototype - MIT LAE",
    description:
      "Manufactured prototype for the research of a multi-stage ducted (MSD) thruster as part of a revised solid-state ionic propelled aircraft design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Laser Cutting", "Water Jetting", "SolidWorks"],
    date: "2023-2024",
  },
  {
    slug: "design-manufacturing",
    title: "2.008 Design & Manufacturing II - MIT",
    description:
      "Applied DFA and DFM principles to design and manufacture 100 injection molded yo-yos in a team of 5. Successfully implemented quality control measures throughout production.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24_2.008-55.JPG-Wk0AShBb2ee4HX1Nl72AOWVpnUpz35.jpeg",
    tags: ["Injection Molding", "DFM", "DFA"],
    date: "Fall 2024",
  },
]

const workExperience = [
  {
    position: "Prototyping and Testing Engineering Intern",
    company: "KULR Technology",
    period: "Summer 2024",
    description:
      "Led the research and design of a BB-2590 lithium-ion battery pack on SolidWorks based on military standards using injection molding design techniques. Assisted with manufacturing and assembly processes for space and defense battery packs in a fast-paced startup environment.",
    skills: ["SolidWorks", "Battery Design", "Injection Molding", "Prototyping"],
  },
  {
    position: "MechE Subteam / Media Lead",
    company: "MIT Arcturus Autonomous Robotics",
    period: "July 2023 - Present",
    description:
      "Planning the strategic design of a watertight command module using OnShape to meet custom electrical requirements. Implemented strategic posts resulting in a 34% follower increase (200+ followers) on social media platforms.",
    skills: ["OnShape", "Mechanical Design", "Social Media Strategy", "Autonomous Robotics"],
  },
  {
    position: "Undergraduate Researcher",
    company: "MIT Laboratory for Aviation and the Environment",
    period: "September 2023 - February 2024",
    description:
      "Manufactured a single-stage thruster integral in advancing fixed-wing ionic aircraft propulsion research. Designed and prototyped enhanced components using SolidWorks, strategically addressing critical failure points in the thruster to improve overall structural reliability.",
    skills: ["SolidWorks", "Prototyping", "Research", "Aerospace"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold mb-8">Projects & Work Experience</h1>

      <Tabs defaultValue="projects" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="work">Work Experience</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index}>
                <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{project.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="line-clamp-3">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="work" className="space-y-8">
          {workExperience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                  <div>
                    <CardTitle>{job.position}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </div>
                  <Badge variant="secondary">{job.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

