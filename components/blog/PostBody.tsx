import React from 'react';
import type { Block, InlineSegment } from '@/lib/blog';

function renderSegments(segments: InlineSegment[], keyPrefix: string) {
    return segments.map((segment, index) => {
        const key = `${keyPrefix}-${index}`;
        if (segment.href) {
            return (
                <a
                    key={key}
                    href={segment.href}
                    className="text-[#111111] border-b border-[#111111]/30 hover:border-[#111111] transition-colors"
                >
                    {segment.text}
                </a>
            );
        }
        if (segment.bold) {
            return (
                <strong key={key} className="font-bold text-[#111111]">
                    {segment.text}
                </strong>
            );
        }
        return <React.Fragment key={key}>{segment.text}</React.Fragment>;
    });
}

export function PostBody({ blocks }: { blocks: Block[] }) {
    return (
        <>
            {blocks.map((block, index) => {
                const top = index === 0 ? '' : block.type === 'heading' && block.level === 2 ? 'mt-16 ' : 'mt-10 ';
                if (block.type === 'heading' && block.level === 2) {
                    return (
                        <h2 key={index} className={`${top}mb-6 text-3xl md:text-4xl font-bold tracking-tight`}>
                            {block.text}
                        </h2>
                    );
                }
                if (block.type === 'heading') {
                    return (
                        <h3 key={index} className={`${top}mb-4 text-2xl font-bold`}>
                            {block.text}
                        </h3>
                    );
                }
                if (block.type === 'list') {
                    return (
                        <ul key={index} className={`${top}mb-6 space-y-3 list-disc pl-6 text-xl font-light leading-relaxed text-[#6E6E6E]`}>
                            {block.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{renderSegments(item, `${index}-${itemIndex}`)}</li>
                            ))}
                        </ul>
                    );
                }
                if (block.type === 'quote') {
                    return (
                        <blockquote key={index} className={`${top}my-10 border-l border-[#111111]/10 pl-6 italic text-xl font-light leading-relaxed text-[#6E6E6E]`}>
                            {renderSegments(block.segments, `${index}`)}
                        </blockquote>
                    );
                }
                return (
                    <p key={index} className={`${top}mb-6 text-xl font-light leading-relaxed text-[#6E6E6E]`}>
                        {renderSegments(block.segments, `${index}`)}
                    </p>
                );
            })}
        </>
    );
}
