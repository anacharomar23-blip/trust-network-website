import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  FEATURES = 'features',
  URA = 'ura',
  CONTACT = 'contact',
}