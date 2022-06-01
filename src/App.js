import Accordion from "./component/Accordion.tsx";
import AccordionItem from "./component/AccordionItem.tsx";

const accordionItems = [
  { title: 'Job Description', content: 'Something related to the job description and the type of role' },
  { title: 'Job Description', content: 'Something related to the job description and the type of role' },
  { title: 'Job Description', content: 'Something related to the job description and the type of role' },
  { title: 'Job Description', content: 'Something related to the job description and the type of role' },
  { title: 'Job Description', content: 'Something related to the job description and the type of role' }
]

export default function App() {
  return (
    <div className="app m-12">
      <h1 className="leading-snug font-semibold text-lg text-white">React Flexible Accordion</h1>
      <div className="mt-8" />
      <Accordion>
        {accordionItems.map((accordionItem, accordionIndex) => (
          <AccordionItem key={accordionIndex}
            title={accordionItem.title}
          >
            { accordionItem.content }
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}