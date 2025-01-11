import React from 'react';

import PersonLink from 'person/components/PersonLink';
import classes from 'person/person.module.scss';
import globalClasses from 'shared/global.module.scss';

export default function PersonList({
  people = [],
  showTagValues,
  showDates,
  getNote,
  columns,
}) {
  // TO DO: dynamic columns
  if (columns === 2) {
    const halfway = Math.ceil(people.length / 2);
    const people1 = people.slice(0, halfway);
    const people2 = people.slice(halfway);
    const props = { showTagValues, getNote };
    return (
      <>
        <div className={globalClasses.column}>
          <PersonList people={people1} {...props} />
        </div>
        <div className={globalClasses.column}>
          <PersonList people={people2} {...props} />
        </div>
      </>
    );
  }
  return (
    <>
      {people.map(person => (
        <div
          className={classes.PersonListItem}
          key={person.id}
          style={{ margin: '10px 0' }}
        >
          <PersonLink person={person} showDates={showDates} />
          {showTagValues && ` - ${person.tagValue}`}
          {getNote && ` ${getNote(person)}`}
          {showDates && (person.birthYear || person.deathYear) && (
            <span className={classes.dates}>
              {person.birthYear || '?'}-{person.deathYear || '?'}
            </span>
          )}
        </div>
      ))}
    </>
  );
}
