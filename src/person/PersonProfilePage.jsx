import React from 'react';

import CitationList from '../CitationList';
import LinkList from '../LinkList';
import PersonList from 'person/PersonList';
import PersonTree from 'person/PersonTree';
import { usePersonContext } from 'person/PersonContext';
import DevOnly from 'shared/DevOnly';
import TagList from 'tag/TagList';

export default function PersonProfilePage() {
  const { person } = usePersonContext();

  return (
    <>
      <DevOnly>
        <h3>share level</h3>
        {person.shareLevel}
        <h3>tags</h3>
        <TagList tags={person.tags} />
      </DevOnly>
      <hr />
      <h3>parents</h3>
      <PersonList people={person.parents} />
      <h3>siblings</h3>
      <PersonList people={person.siblings} />
      <h3>spouses</h3>
      <PersonList people={person.spouses} />
      <h3>children</h3>
      <PersonList people={person.children} />
      <hr />
      <DevOnly unless={!person.private}>
        <h3>links</h3>
        <LinkList links={person.links} />
      </DevOnly>
      <h3>tree</h3>
      <PersonTree person={person} />
      <DevOnly unless={!person.private}>
        <h3>citations</h3>
        <CitationList citations={person.citations} showPerson={false} />
      </DevOnly>
    </>
  );
}
