import { ForumCache } from 'decent-forum-api';
import { PendingTxTracker } from 'decent-forum-api';
import { BlockWatcher } from 'decent-forum-api/block-watcher/block-watcher';
  
/**
 * Shared Global State
 * 
 * This is passed around to all views, and sometimes components if they need it. 
 * 
 * It is created in the root App component.
 * 
 * Views & Components should _generally treat it as a read only object_
 * and use api methods or services which will update it. These apis
 * and services will expose a Promise based api that returns once the 
 * shared state is updated, so the view can trigger/untrigger loading 
 * operations etc.
 * 
 * 
 */

export interface SharedState {
  user: CurrentUser
  cache: ForumCache
  tracker: PendingTxTracker
  blockWatcher: BlockWatcher
}

export interface LoggedInUser {
  loggedIn: true 
  wallet: any // jwk
  walletAddress: string
}

export interface AnonymouUser {
  loggedIn: false 
}

export type CurrentUser = LoggedInUser | AnonymouUser;
