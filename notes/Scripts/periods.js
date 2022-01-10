import { RRule, RRuleSet, rrulestr} from 'rrule'

// Create a rule:
const rule = new RRule({
  freq: RRule.WEEKLY,
  interval: 5,
  byweekday: [RRule.MO, RRule.FR],
  dtstart: new Date(Date.UTC(2021, 1, 1, 10, 30)),
  until: new Date(Date.UTC(2022, 12, 31))
})

function class(date, period){

}

module.exports = class;
