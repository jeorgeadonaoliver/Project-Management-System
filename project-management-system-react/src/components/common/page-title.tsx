type PageTitleProps = {
    title: string;
};

export const PageTitle = ({title}: PageTitleProps)=> {

    return(
        <div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight leading-tight mb-6">
                {title}
            </h1>
        </div>
    );
};