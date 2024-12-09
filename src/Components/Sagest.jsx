
import SagestItem from "./SagestItem";

export default function Sagest() {
  return (
    <div className="flex flex-col justify-center items-center pt-12 gap-8">
      <h2 className="font-semibold text-base">How can I help you my friend? 😊️</h2>
      <div className="flex flex-col gap-4 px-4 mb-">
        <SagestItem Title="Brainstorm names" description="for my fantasy football team with a frog theme" />
        <SagestItem Title="Suggest some codenames" description="for a project introducing flexible work arrangements" />
        <SagestItem Title="Write a SQL query" description={`that adds a "status" column to an "orders" table`} />
        <SagestItem Title="Explain why popcorn pops" description="to a kid who loves watching it in the microwave" />
      </div>

    
    </div>
  )
}
