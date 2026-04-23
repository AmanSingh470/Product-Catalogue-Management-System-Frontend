import BackButton from "@/components/Layout/BackButton";

export default function Main({title="SuFilm - TFOm", segment="Instrument panels", category="Technology", description="Pre heated thin TPO foil, in mould grained during overmoulding operation.", contact="Alain Choquet", email="Alain.Choquet@motherson.com", functions="Senior Marketing Manager", company = "SMRC", division="Modules & Polymer Products", lastModified="4/17/2026"}: any) {
  return (
    <div className="ml-8 mr-8">
      <BackButton />

      <h1 className="text-4xl mt-8 mb-4">{title}</h1>
      <div>Segment - {segment}</div>
      <div>Category - {category}</div>

      <div className="flex justify-center items-center mt-3">
        <div className="basis-1/2">{description}</div>
        <div className="flex-1/4">
          <ul>
              <li>Contact - {contact}</li> 
              <li>Email - {email}</li> 
              <li>Function - {functions}</li> 
          </ul>
        </div>
        <div className="flex-1/4">
        <ul>
          <li>Company - {company}</li>
          <li>Division - {division}</li>
          <li>Last Modified - {lastModified}</li>
          <li>
            <button className="cursor-pointer underline text-red-600">Download Factsheet</button>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}
