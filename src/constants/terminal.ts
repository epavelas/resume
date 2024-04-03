import {
  AchievementsCommand,
  EducationCommand,
  ExperienceCommand,
  HelpCommand,
  InterestsCommand,
  SkillsCommand,
  WhoAmICommand,
} from '@/components/applications/terminal-app/commands'
import type { TerminalCommandModel } from '@/types/terminal'

export const TERMINAL_COMMANDS: Array<TerminalCommandModel> = [
  {
    command: 'whoami',
    description: 'General information about me',
    ContentComponent: WhoAmICommand,
  },
  {
    command: 'education',
    description: 'Educational qualifications',
    ContentComponent: EducationCommand,
  },
  {
    command: 'experience',
    description: 'Professional experience',
    ContentComponent: ExperienceCommand,
  },
  {
    command: 'skills',
    description: 'Technical skills & tools',
    ContentComponent: SkillsCommand,
  },
  {
    command: 'achievements',
    description: 'Personal achievements',
    ContentComponent: AchievementsCommand,
  },
  {
    command: 'interests',
    description: 'Personal interests & hobbies',
    ContentComponent: InterestsCommand,
  },
  {
    command: 'help',
    description: 'List of available commands',
    isHidden: true,
    ContentComponent: HelpCommand,
  },
]
