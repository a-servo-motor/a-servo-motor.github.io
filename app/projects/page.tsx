import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    slug: "stirling",
    title: "Stirling Engine",
    company: "MIT Pappalardo Apprentice",
    description:
      "",
    images: "/Site_Images/Stirling_Engine/SA_003.jpg",
    tags: ["Machining", "Mill", "Lathe"],
    date: "Spring 2026",
  },
    {
    slug: "embroidery",
    title: "Embroidery Pattern Printer",
    company: "MIT 2.009 - Product Engineering Process",
    description:
      "",
    images: "/Site_Images/scribbly-hero.png",
    tags: ["Image Processing", "Hardware Integration", "Presentation"],
    date: "Fall 2025",
  },
  {
    slug: "pencil",
    title: "Bistable Pencil Launcher",
    company: "MIT 2.145 - Compliant Mechanisms",
    description:
      "",
    images: "/Site_Images/pencil_launcher.png",
    tags: ["3D Print", "Iterating", "Projectiles", "Prototyping"],
    date: "Fall 2025",
  },
    {
    slug: "crashpad",
    title: "Soft-Stop Mechanism",
    company: "MIT 2.145 - Compliant Mechanisms",
    description:
      "",
    images: "/Site_Images/crashpad.png",
    tags: ["3D Print", "Stiffness Matrices", "Laser Cutting", "Prototyping"],
    date: "Fall 2025",
  },
     {
    slug: "egg",
    title: "Compliant Egg Gripper - PRBM",
    company: "MIT 2.145 - Compliant Mechanisms",
    description:
      "",
    images: "/Site_Images/Egg Gripper.png",
    tags: ["Waterjet", "Waterjet Calibration", "PRBM", "Prototyping"],
    date: "Fall 2025",
  },
  {
    slug: "screw",
    title: "Screw DOF Platform",
    company: "MIT 2.145 - Compliant Mechanisms",
    description:
      "",
    images: "/Site_Images/screw.png",
    tags: ["Waterjet", "Laser Cutting", "FACT","Prototyping"],
    date: "Fall 2025",
  },
    {
    slug: "cbd",
    title: "Thermal and Force Load Isolation",
    company: "MIT 2.145 - Compliant Mechanisms",
    description:
      "",
    images: "/Site_Images/thermal_load_isolation.png",
    tags: ["Waterjet", "Constraint-Based Design"],
    date: "Fall 2025",
  },
  {
    slug: "ambulation",
    title: "RFID Ambulation Tracker",
    company: "MIT 2.75 - Medical Device Design",
    description:
      "Developed a modular ambulation tracking system for post-operative patients in hospital settings.",
    images: "/Site_Images/Wristband.jpg",
    tags: ["Raspberry Pi", "Python", "Hardware Web Integration", "RFID"],
    date: "Spring 2025",
  },
  {
    slug: "2.679",
    title: "ToF-Based 3D Scanner",
    company: "MIT 2.679",
    description:
      "Prototyped a 3D scanner using a time-of-flight (ToF) sensor and a rotating base assembly.",
    images: "/Site_Images/2679_ISO_1.png",
    tags: ["Raspberry Pi", "Python", "Fabrication"],
    date: "Spring 2025",
  },
  // {
  //   slug: "axon",
  //   title: "Body Worn Camera",
  //   company: "Axon Enterprise",
  //   description:
  //     "Created extensive test fixture for an unreleased Body Worn Camera's electronics.",
  //   images: '/Site_Images/axon-logo.jpg',
  //   tags: ["Consumer Electronics", "Creo", "Prototyping"],
  //   date: "Summer 2025",
  // },
  {
    slug: "safecase-kulr",
    title: "SafeCASE",
    company: "KULR Technology",
    description:
      "Created an updated CAD design and drawings for a lithium-ion battery safety storage case. Developed a new parametric model allowing for easily updating model measurements and being used as a base file for other similar designs.",
    images: '/Site_Images/Kulr_Case.jpg',
    tags: ["SolidWorks", "Sheet Metal Design", "Technical Drawings"],
    date: "Summer 2024",
  },
  {
    slug: "bb2590-battery-pack",
    title: "BB-2590 Li-Ion Battery Pack",
    company: "KULR Technology",
    description:
      "Designed a prototype 3p4s battery pack assembly according to MIL-SPEC standards and ideal injection molding processes. Created a CAD model and SLS printed case prototype.",
    images: '/Site_Images/Kulr_Pack_CAD_Exploded.png',
    tags: ["SolidWorks", "Prototyping", "Battery Assembly"],
    date: "Summer 2024",
  },
  {
    slug: "2.007",
    title: "MIT 2.007 Robot",
    company: "MIT Design & Manufacturing I",
    description:
      "Individually designed and manufactured an aluminum robot to complete various tasks for a class competition.",
    images: '/Site_Images/2.007_1.jpg',
    tags: ["SolidWorks", "Sheet Metal Design", "Technical Drawings"],
    date: "Spring 2024",
  },
  {
    slug: "electroaerodynamic-thruster",
    title: "ElectroAerodynamic Thruster Prototype",
    company: "MIT LAE",
    description:
      "Manufactured prototype for the research of a multi-stage ducted (MSD) thruster as part of a revised solid-state ionic propelled aircraft design.",
    images: '/Site_Images/EAD_CAD.png',
    tags: ["Laser Cutting", "Rapid Prototyping", "SolidWorks"],
    date: "Fall 2023 - Spring 2024",
  },
  {
    slug: "design-manufacturing",
    title: "Injection Molded Yo-Yos",
    company: "MIT 2.008",
    description:
      "Applied DFA and DFM principles to design and manufacture 50 injection molded yo-yos in a team of 5. Successfully implemented quality control measures throughout production.",
    images:'/Site_Images/Yo-Yo Iso.jpg',
    tags: ["Injection Molding", "DFM", "DFA"],
    date: "Fall 2024",
  },
]

const workExperience = [
  {
    position: "MIT 2.007 Pappalardo Apprentice (Undergraduate Assistant)",
    company: "MIT Pappalardo Lab",
    link: "https://meche.mit.edu/featured-classes/pappalardo-lab-apprentice",
    period: "Spring 2026",
    description:
      "Mentored undergraduate students in the 2.007 design and manufacturing course, providing hands-on instruction in manual machining, hand-tool operation, and safe shop practices. Independently machined a precision Stirling engine, calculating optimal speeds and feeds using standard engineering literature.",
    skills: ["Machining", "Injection Molding", "Shop Assistant"],
  },
  {
    position: "MIT 2.008 Lab Assistant",
    company: "MIT LMP",
    link: "https://meche.mit.edu/featured-classes/design-and-manufacturing-ii",
    period: "Fall 2025",
    description:
      "Guided 2 student teams in iterating and manufacturing 50 Yo-Yos each in a fast-paced shop space as a lab assistant.",
    skills: ["Machining", "Injection Molding", "Shop Assistant"],
  },
  {
    position: "Hardware Engineering Intern (R&D)",
    company: "Axon Enterprise",
    link: "https://www.axon.com/",
    period: "Summer 2025",
    description:
      "Designed a test fixture for an unreleased Axon Body Worn Camera's electronics stackup with large assemnbly and manufacturing in mind for use by 50 teams globally. Traveled to Taiwan to support on-site prototype assembly, directly assisting in physical builds, documenting process feedback, and functional testing.",
    skills: ["Consumer Electronics", "Creo Parametric", "Injection Molding Design", "Prototyping"],
  },
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
      <h1 className="text-4xl font-bold mb-8">Projects & Experience</h1>

      <Tabs defaultValue="projects" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="work">Experience</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-8">
          <div className="flex flex-wrap justify-center gap-4">
             {projects.map((project, index) => (
              <Link
                href={`/projects/${project.slug}`}
                key={index}
                className="w-full sm:basis-[calc(50%-0.5rem)] md:basis-[calc(33.333%-0.67rem)] lg:basis-[calc(25%-0.75rem)]"
              >
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

