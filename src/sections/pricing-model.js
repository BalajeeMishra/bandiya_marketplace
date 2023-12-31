/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text,Button } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
import support from 'assets/images/support.png';
import PricingImage from "assets/images/Pricing-image.png";
const list = [
//   "The patent's claims",
//   'The prior art',
//   'The market for invention',
//   'The value of the patent',
];

const changeUrl =(url)=>{
  window.location.href=url; 
}
const PricingModel = () => {
  return (
    <Box as="section" sx={styles.section} id="pricing">
      <Container>
        <Box sx={styles.grid}>
          
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            Our pricing plans are tailored to your needs.
            </Heading>
            <Text as="p" sx={styles.summary}>
            Our pricing plans are designed to be flexible and scalable, so you can only pay for the resources you use. Contact us today to learn more about our pricing plans and how we can help you grow your business.
            </Text>

            <Grid sx={styles.list} as="ul">
            <Button variant="primary" sx={styles.donateNow} onClick={()=>{changeUrl("https://8veayideejz.typeform.com/to/SVJAbj05")}} >
            Patent Licensing
            </Button>     
        <Button variant="primary" sx={styles.donateNow} onClick={()=>{changeUrl("https://8veayideejz.typeform.com/to/TFbMk4Pz")}}>
        Patent Filing
        </Button>   
            </Grid>
          </Box>
          
          <Box sx={styles.illustration}>
            <Image src={PricingImage} loading="lazy" alt="support" />
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default PricingModel;

const styles = {
  section: {
    pt: [8, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, 2],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 549px'],
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    img: {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'left'],
  },
  title: {
    color: 'heading',
    fontFamily: 'headingAlt',
    fontSize: [4, null, null, 8, null, null, 11],
    fontWeight: 500,
    lineHeight: [1.33, null, 1.4, 1.53],
    letterSpacing: ['-0.5px', null, null, '-1px'],
    mb: 3,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
  // donateNow: {
  //   fontSize: 1,
  //   minHeight: 45,
  //   margin: 'auto 30px 40px',
  // },
};
