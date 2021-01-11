import { EventLog, EventLogUi, LogEvent, LogView } from '../model/eventlog.model';
import { Locations } from '../model/locations';

const ViewNames = new Map<LogView, string>([
  ['App', 'App'],
  ['Help', 'O aplikaci Pekárna žije!'],
  ['Welcome', 'Úvodní pokyny'],
  ['Quiz', 'Otázka'],
  ['Task', 'Úkol'],
  ['Navigation', 'Navigace'],
  ['Gameover', 'Konec hry']
]);

const LogEventNames = new Map<LogEvent, string>([
  ['ViewEntered', 'Zobrazení stránky'],
  ['AnswerEntered', 'Odeslání odpovědi']
]);
export class EventLogMapper {

  static mapEventLog(eventLog: EventLog): EventLogUi {
    return {
      id: eventLog.ID,
      sessionId: eventLog.SESSION_ID,
      location: Locations.find(l => l.id === eventLog.LOCATION_ID)?.name ?? eventLog.LOCATION_ID,
      view: ViewNames.get(eventLog.VIEW) ?? eventLog.VIEW,
      event: LogEventNames.get(eventLog.EVENT) ?? eventLog.EVENT,
      details: eventLog.DETAILS,
      userAgent: eventLog.USER_AGENT,
      timestamp: eventLog.TIMESTAMP
    };
  }
}
