import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const AboutUs = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <section className="p-4 pt-20">
      <p>
        With a Creative Media and Business background straight after university
        I(Director) ran a video production team for over 2 years producing video
        content alongside some of the biggest brands in the UK. Straight after
        leaving I had a vision to create a strong in-house team around me to
        help assist creative and strategic insight for businesses across a
        number of industries. We as a team are also forever learning and
        training as the marketing landscape changes so we can keep up to date
        and pass this on, as we believe marketing is forever lasting and
        changing.
      </p>
    </section>
  </Main>
);

export default AboutUs;
