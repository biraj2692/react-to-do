import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, earum.',
            fileSize: '0.9mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Upload Now',
                tagColor: 'blue'
            },

        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, earum.',
            fileSize: '0.9mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download',
                tagColor: 'green'
            },

        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, earum.',
            fileSize: '0.9mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download',
                tagColor: 'green'
            },

        }
    ];
    // const [first, setfirst] = useState(second)
  return (
    <div ref={ref} className="w-full h-screen fixed z-[3] top-0 left-0 flex gap-5 flex-wrap p-5 flex-shrink-0">
        {data.map((item, index) =>(
        <Card data={item} reference = {ref} />
        ) )}
    </div>
  );
};

export default Foreground;
