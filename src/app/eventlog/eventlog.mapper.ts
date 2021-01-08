import { EventLog, EventLogUi } from '../model/eventlog.model';

export class EventLogMapper {

  static mapEventLog(eventLog: EventLog): EventLogUi {
    return {
      id: eventLog.ID,
      sessionId: eventLog.SESSION_ID,
      location: eventLog.LOCATION_ID,
      view: eventLog.VIEW,
      event: eventLog.EVENT,
      details: eventLog.DETAILS,
      userAgent: eventLog.USER_AGENT,
      timestamp: eventLog.TIMESTAMP
    };
  }
}
