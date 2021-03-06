import React from 'react';
import { SectionRes } from '../section-res.interface';
import { ContainerItemSection } from './container';
import { ContentItemSection } from './content';
import { HeaderItemSection } from './header';
import { WrapperItemSection } from './wrapper';

interface Props {
  section: SectionRes;
}

export const ItemSection: React.FC<Props> = ({ section }) => {
  return (
    <ContainerItemSection>
      <WrapperItemSection>
        <HeaderItemSection section={section} />
        <ContentItemSection section={section} />
      </WrapperItemSection>
    </ContainerItemSection>
  );
};
