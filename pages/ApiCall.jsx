export async function getStaticProps() {
  const res = await fetch('https://chronologue.netlify.app/api/all')
  const posts = await res.json()
  console.log(res)
  return {
    props: {
      posts,
    },
  }
}

export default function ApiCall({ posts }) {
  console.log(posts)
  return (
    <div>

      <table>
        <tr>
          <th>Event Name</th>
          <th>Continents</th>
          <th>Date/Time</th>
        </tr>
        <tr>
          <td>Launched a space rocket</td>
          <td>europe</td>
          <td>2012-12-21</td>
        </tr>

      </table>


    </div>
  )
}
