import { ThemeToggle } from "./components/ui/theme-toggle"
import { NavigationMenu } from "./components/ui/navigation-menu"
import { PDFDownload } from "./components/ui/pdf-download"
import { resume } from "./data/resume"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="hidden md:inline">{resume.header.name}</span>
            <span className="md:hidden">{resume.header.shortName}</span>
          </h1>
          <div className="flex items-center">
            <div className="hidden md:flex items-center gap-4">
              <NavigationMenu />
              <PDFDownload />
              <ThemeToggle />
            </div>
            <div className="flex md:hidden items-center gap-4 ml-auto">
              <PDFDownload />
              <ThemeToggle />
              <NavigationMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="prose dark:prose-invert">
          <div className="mb-8 flex flex-col md:flex-row gap-4 text-sm">
            <span>{resume.header.location}</span>
            <span>{resume.header.phone}</span>
            <div className="flex gap-4">
              <a href={`mailto:${resume.header.email}`}>{resume.header.email}</a>
              {resume.header.social.map((link, i) => (
                <a key={i} href={link.url}>{link.text}</a>
              ))}
            </div>
          </div>

          <section id="profile" className="mb-8">
            <h2>Profile</h2>
            <p>{resume.profile}</p>
          </section>

          <section id="skills" className="mb-8">
            <h2>Skills</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 !pl-0">
              {resume.skills.map((skill, i) => (
                <li key={i} className="list-none">
                  <strong>{skill.category}:</strong> {skill.items}
                </li>
              ))}
            </ul>
          </section>

          <section id="experience" className="mb-8">
            <h2>Experience</h2>
            <div className="space-y-8">
              {resume.experience.map(job => (
                <div key={`${job.company}-${job.period}`} className="border-b pb-6">
                  <h3>{job.title} — {job.company}</h3>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                  <ul>
                    {job.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  {job.tech && (
                    <p className="text-sm mt-2">
                      <strong>{job.tech.label || "Technologies"}:</strong> {job.tech.stack}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="mb-8">
            <h2>Education</h2>
            <div className="space-y-4">
              {resume.education.map((edu, i) => (
                <div key={i}>
                  <h3>{edu.school}</h3>
                  <p className="text-sm text-muted-foreground">{edu.degree} — {edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="mb-8">
            <h2>Certifications & Online Profiles</h2>
            <ul className="!pl-0">
              {resume.certifications.items.map((cert, i) => (
                <li key={i} className="list-none mb-2">
                  <strong>{cert.name}</strong>{cert.details && ` — ${cert.details}`}
                  {cert.links && (
                    <div className="text-sm">
                      {cert.links.map((link, j) => (
                        <span key={j}>
                          {j > 0 && " · "}
                          <a href={link.url}>{link.text}</a>
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li className="list-none mb-2">
                <strong>Online Profiles:</strong>
                <div className="flex gap-4 text-sm">
                  {resume.certifications.profiles.map((profile, i) => (
                    <a key={i} href={profile.url}>{profile.text}</a>
                  ))}
                </div>
              </li>
            </ul>
          </section>

          <section id="projects" className="mb-8">
            <h2>Notable Projects</h2>
            <div className="space-y-6">
              {resume.projects.map(project => (
                <div key={project.name} className="border-b pb-4">
                  <h3>{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.company} {project.period && `— ${project.period}`}
                  </p>
                  {project.links && (
                    <div className="flex gap-2 flex-wrap text-sm mb-2">
                      {project.links.map((link, i) => (
                        <a key={i} href={link.url}>{link.text}</a>
                      ))}
                    </div>
                  )}
                  <p>{project.description}</p>
                  <ul>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  {project.tech && (
                    <p className="text-sm mt-2">
                      <strong>Tech:</strong> {project.tech}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App