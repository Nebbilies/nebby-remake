export default function ToolsArea() {
    const tools = ["Javascript", "TypeScript", "React", "Next.js", "ShadcnUI", "DaisyUI", "Node.js", "Express", "Figma", "Git"];
    return (
        <div className={'w-full'}>
            <h3 className={'text-3xl font-bold mb-5'}>Things I&#39;ve <span className={'text-accent'}>worked</span> with.</h3>
            <div className={'flex flex-wrap w-full gap-2'}>
                {tools.map((tool) => {
                    return (
                        <div className={'badge badge-lg  font-semibold badge-outline'} key={tool}>
                            {tool}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}