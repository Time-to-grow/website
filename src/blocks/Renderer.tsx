import Box from '@mui/material/Box';

import ContactUs from './ContactUs';
import Section from './Section';
import Outline from '@/components/Outline';

type Blocks = {
    [key: string]: any;
}

const blocks: Blocks = {
    section: Section
}

type FactoryProps = {
    content: {
        fields: {
            type: string;
            blocks: any[];
        }
        sys: {
            contentType: {
                sys: {
                    id: string;
                }
            }
        }
    };
    detail?: boolean;
}

const Factory = (props: FactoryProps) => {
    const { content, detail } = props;
    const name: string = content && content.sys.contentType.sys.id;

    if (!content || !name) {
        return <Outline />
    }
    return blocks[name]({ content, detail })
}

const Renderer = (props: FactoryProps) => {
    const { content } = props;

    return (
        <Box sx={{ my: 4 }}>
            {content && content.sys.contentType.sys.id === 'assembly'
                ?
                <Box>
                    {content.fields.blocks?.map((block, index) =>
                        <Factory key={index} content={block} />
                    )}
                </Box>
                :
                <Factory detail={true} content={content} />
            }
            <ContactUs />
        </Box>
    )
}

export default Renderer;
