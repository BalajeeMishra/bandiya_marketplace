/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const changeUrl =()=>{
  window.location.href="https://calendly.com/sakar-baxi/patent-discussion" 
}


const data = [
  {
    id: 1,
    title: `01. What is patent licensing?`,
    contents: (
      <div>
        Patent licensing is the process by which the owner of a patent grants permission to another party to use the patent. This can be done for a fee, or in exchange for other considerations, such as the right to use the other party's patents.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. What are the benefits of patent licensing?`,
    contents: (
      <div>
        Patent licensing can be helpful in generating revenue, expanding markets, mitigating risks, and forming strategic partnerships.
      </div>
    ),
  },
  {
    id: 3,
    title: `03. What is a royalty based patent license?`,
    contents: (
      <div>
        A royalty based patent license is a type of patent license in which the licensee pays the licensor a royalty for each unit of the patented product that is sold. The royalty rate is typically expressed as a percentage of the sales price of the product.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. Royalty based licensing v/s normal patent licensing methods?`,
    contents: (
      <div>
        Normal patent licensing methods typically involve the licensor charging the licensee a flat fee for the right to use the patent. This can be a good option if the patent is not expected to generate a lot of revenue. However, royalty based patent licensing is often a better option if the patent is expected to generate a lot of revenue. This is because the licensor will be able to share in the profits that are generated from the use of the patent.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. What is a patent valuation report (PVR)?`,
    contents: (
      <div>
        A patent valuation report (PVR) is a document that estimates the value of a patent. The report typically includes an analysis of the patent's technical merits, its commercial potential, and the market for similar patents.
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your question answer"
          title="Frequently asked question"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
          <Button variant="text" onClick={changeUrl}>Still Question? Contact us</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    // pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
