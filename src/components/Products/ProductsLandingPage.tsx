import BackButton from "@/components/Layout/BackButton";

export default function ProductsLandingPage({ title = "SuFilm - TFOm", segment = "Instrument panels", category = "Technology", description = "Pre heated thin TPO foil, in mould grained during overmoulding operation.", contact = "Alain Choquet", email = "Alain.Choquet@motherson.com", functions = "Senior Marketing Manager", company = "SMRC", division = "Modules & Polymer Products", lastModified = "4/17/2026" }: any) {
  return (
    <div className="mb-22">
      <BackButton />

      <h1 className="text-4xl mt-8 mb-4">{title}</h1>
      <h3 className="text-[var(--grey-600)] text-sm">Segment - {segment}</h3>
      <h3 className="text-[var(--grey-600)] text-sm">Category - {category}</h3>

      <div className="flex justify-center mt-6">
        <div className="basis-1/2 text-[var(--grey-600)] text-sm">{description}</div>
        <div className="flex-1/4">
          <ul className="text-[var(--grey-600)] text-sm">
            <li>Contact - {contact}</li>
            <li>Email - {email}</li>
            <li>Function - {functions}</li>
          </ul>
        </div>
        <div className="flex-1/4">
          <ul className="text-[var(--grey-600)] text-sm">
            <li>Company - {company}</li>
            <li>Division - {division}</li>
            <li>Last Modified - {lastModified}</li>
            <li className="m-2">
              <button className="cursor-pointer underline text-red-600">Download Factsheet</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
