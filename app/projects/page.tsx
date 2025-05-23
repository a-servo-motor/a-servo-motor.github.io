import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    slug: "safecase-kulr",
    title: "SafeCASE",
    company: "KULR Technology",
    description:
      "Created an updated CAD design and drawings for a lithium-ion battery safety storage case. Developed a new parametric model allowing for easily updating model measurements and being used as a base file for other similar designs.",
    images: "/Site_Images/Kulr_Case.jpg",
    tags: ["SolidWorks", "Sheet Metal Design", "Technical Drawings"],
    date: "Summer 2024",
  },
  {
    slug: "bb2590-battery-pack",
    title: "BB-2590 Li-Ion Battery Pack",
    company: "KULR Technology",
    description:
      "Designed a prototype 3p4s battery pack assembly according to MIL-SPEC standards and ideal injection molding processes. Created a CAD model and SLS printed case prototype.",
    images: "/Site_Images/Kulr_Pack_CAD_Exploded.png",
    tags: ["SolidWorks", "Prototyping", "Battery Assembly"],
    date: "Summer 2024",
  },
  {
    slug: "electroaerodynamic-thruster",
    title: "ElectroAerodynamic Thruster Prototype",
    company: "MIT LAE",
    description:
      "Manufactured prototype for the research of a multi-stage ducted (MSD) thruster as part of a revised solid-state ionic propelled aircraft design.",
    images: "/Site_Images/EAD_CAD.png",
    tags: ["Laser Cutting", "Rapid Prototyping", "SolidWorks"],
    date: "Fall 2023 - Spring 2024",
  },
  {
    slug: "design-manufacturing",
    title: "Injection Molded Yo-Yos",
    company: "MIT 2.008",
    description:
      "Applied DFA and DFM principles to design and manufacture 50 injection molded yo-yos in a team of 5. Successfully implemented quality control measures throughout production.",
    images:
      "/Site_Images/Yo-Yo Iso.jpg",
    tags: ["Injection Molding", "DFM", "DFA"],
    date: "Fall 2024",
  },
]

const workExperience = [
  {
    position: "Prototyping and Testing Engineering Intern",
    company: "KULR Technology",
    link: "https://kulr.ai/",
    period: "Summer 2024",
    description:
      "Led the research and design of a BB-2590 lithium-ion battery pack on SolidWorks based on military standards using injection molding design techniques. Assisted with manufacturing and assembly processes for space and defense battery packs in a fast-paced startup environment.",
    skills: ["SolidWorks", "Battery Design & Assembly", "Injection Molding Design", "Prototyping"],
  },
  {
    position: "Undergraduate Researcher",
    company: "MIT Laboratory for Aviation and the Environment",
    link: "https://lae.mit.edu/",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index}>
                <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.images || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{project.title}</CardTitle>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-white">{project.company}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="line-clamp-3">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-1 p-3 pt-0">
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
                    <CardDescription><a href={job.link}>{job.company}</a></CardDescription>
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

