import { processConsts } from "../consts/processConsts"

export default function Process() {
  return (
    <div>
      { processConsts.map( (process, index) => (
          <section key={ index }>
            <h2 className="section-heading"><div className="section-number">{++index}</div><div> - { process.title }</div></h2>
            <ul>
              { process.content.map( (item, index) => (
                  <li key={ index }>{ item }</li>
              ))}
            </ul>
          </section>
      ))}
    </div>
  )
}