import { Meta, StoryFn } from '@storybook/react';

import { StoryColumn } from '../../support/Story';
import { H1, H2, Paragraph, Link } from '../../index';

const meta: Meta = {
    title: 'Typography',
} as Meta;
export default meta;

export const AllTypography: StoryFn = () => (
    <>
        <StoryColumn>
            <H1 data-testid="heading-1">Heading 1</H1>
            <H2 data-testid="heading-2">Heading 2</H2>
        </StoryColumn>
        <StoryColumn>
            <Paragraph data-testid="paragraph-default">
                default
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ante quis lectus
                eleifend rutrum. Aenean tincidunt odio vel fermentum ultricies. Sed suscipit
                interdum eros, eget placerat lorem pulvinar in. Ut elit orci, rhoncus eu porta vel,
                feugiat vel mi.
            </Paragraph>
            <Paragraph typographyStyle="titleLarge" data-testid="paragraph-titleLarge">
                type=&quot;titleLarge&quot;
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ante quis lectus
                eleifend rutrum. Aenean tincidunt odio vel fermentum ultricies. Sed suscipit
                interdum eros, eget placerat lorem pulvinar in. Ut elit orci, rhoncus eu porta vel,
                feugiat vel mi.
            </Paragraph>
            <Paragraph typographyStyle="titleMedium" data-testid="paragraph-titleMedium">
                type=&quot;titleMedium&quot;
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ante quis lectus
                eleifend rutrum. Aenean tincidunt odio vel fermentum ultricies. Sed suscipit
                interdum eros, eget placerat lorem pulvinar in. Ut elit orci, rhoncus eu porta vel,
                feugiat vel mi.
            </Paragraph>
            <Paragraph typographyStyle="titleSmall" data-testid="paragraph-titleSmall">
                type=&quot;titleSmall&quot;
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ante quis lectus
                eleifend rutrum. Aenean tincidunt odio vel fermentum ultricies. Sed suscipit
                interdum eros, eget placerat lorem pulvinar in. Ut elit orci, rhoncus eu porta vel,
                feugiat vel mi.
            </Paragraph>
            <Paragraph typographyStyle="highlight" data-testid="paragraph-highlight">
                type=&quot;highlight&quot;
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ante quis lectus
                eleifend rutrum. Aenean tincidunt odio vel fermentum ultricies. Sed suscipit
                interdum eros, eget placerat lorem pulvinar in. Ut elit orci, rhoncus eu porta vel,
                feugiat vel mi.
            </Paragraph>
            <Paragraph typographyStyle="callout" data-testid="paragraph-callout">
                type=&quot;callout&quot;
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ante quis lectus
                eleifend rutrum. Aenean tincidunt odio vel fermentum ultricies. Sed suscipit
                interdum eros, eget placerat lorem pulvinar in. Ut elit orci, rhoncus eu porta vel,
                feugiat vel mi.
            </Paragraph>
            <Paragraph typographyStyle="hint" data-testid="paragraph-hint">
                type=&quot;hint&quot;
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ante quis lectus
                eleifend rutrum. Aenean tincidunt odio vel fermentum ultricies. Sed suscipit
                interdum eros, eget placerat lorem pulvinar in. Ut elit orci, rhoncus eu porta vel,
                feugiat vel mi.
            </Paragraph>
            <Paragraph typographyStyle="label" data-testid="paragraph-label">
                type=&quot;label&quot;
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ante quis lectus
                eleifend rutrum. Aenean tincidunt odio vel fermentum ultricies. Sed suscipit
                interdum eros, eget placerat lorem pulvinar in. Ut elit orci, rhoncus eu porta vel,
                feugiat vel mi.
            </Paragraph>

            <Paragraph data-testid="paragraph-link">
                Default text with <Link href="/">link</Link>.
            </Paragraph>
            <Paragraph typographyStyle="hint" data-testid="paragraph-link-hint">
                Hint text with <Link href="/">link</Link>.
            </Paragraph>
            <Paragraph typographyStyle="label" data-testid="paragraph-link-label">
                Label text with <Link href="/">link</Link>.
            </Paragraph>
        </StoryColumn>
    </>
);
