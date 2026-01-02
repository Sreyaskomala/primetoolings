import { Metadata } from 'next';
import EnquiryForm from './EnquiryForm';

export const metadata: Metadata = {
    title: 'Enquiry | Prime Toolings',
    description: 'Apply for aerospace internships, request technical specifications, or propose collaborations with Prime Toolings.',
};

export default function EnquiryPage() {
    return <EnquiryForm />;
}
