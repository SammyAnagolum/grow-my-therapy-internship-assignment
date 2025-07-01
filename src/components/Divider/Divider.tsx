type DividerProps = {
    borderColor: string;
    bg?: string;
    thickness?: number;
};

const Divider = ({ borderColor, bg = "#f3f0e8", thickness = 1 }: DividerProps) => {
    return (
        <div
            className="w-full px-4 sm:px-6 md:px-[4vw] py-16"
            style={{ background: bg }}
        >
            <hr
                className="w-full shadow-md border-0"
                style={{ borderTop: `${thickness}px solid ${borderColor}` }}
            />
        </div>
    );
};

export default Divider;