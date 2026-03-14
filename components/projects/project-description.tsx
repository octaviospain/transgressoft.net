import React from "react"

const ProjectDescription: React.FC<
  Readonly<{
    paragraphs: string[]
    bullets: string[]
  }>
> = ({ paragraphs, bullets }) => {
  return (
    <div>
      {paragraphs.map((paragraph) => (
        <p className="mb-4" key={paragraph}>
          {paragraph}
        </p>
      ))}
      <ul className="list-disc pl-6 mt-4">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectDescription
