export default function Acceptance({ form }) {

  return (

    <section className="proposal-page">

      <h2>Proposal Acceptance</h2>

      <p>

        By signing below, both parties agree to the scope, pricing, payment terms, and timelines outlined in this proposal.

      </p>

      <br /><br />

      <table
        style={{
          width: "100%",
        }}
      >

        <tbody>

          <tr>

            <td>

              _______________________

              <br />

              Client Signature

            </td>

            <td>

              _______________________

              <br />

              Date

            </td>

          </tr>

          <tr>

            <td
              style={{
                paddingTop: "60px",
              }}
            >

              _______________________

              <br />

              Fine Tech Creatives

            </td>

            <td
              style={{
                paddingTop: "60px",
              }}
            >

              _______________________

              <br />

              Authorized Representative

            </td>

          </tr>

        </tbody>

      </table>

    </section>

  );

}