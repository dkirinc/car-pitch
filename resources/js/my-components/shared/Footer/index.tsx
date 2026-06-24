import FooterMain from './FooterMain';
import FooterTop from './FooterTop';

type Props = {
    type: 'full' | 'top' | 'main' | 'none';
};

const Footer = ({ type }: Props) => (
    <section className="mt-4 w-full">
        {(type === 'full' || type === 'top') && <FooterTop />}
        {(type === 'full' || type === 'main') && <FooterMain />}
    </section>
);

export default Footer;
