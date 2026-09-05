'use client';

import { Box, Tooltip, Typography, useTheme } from '@mui/material';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMui,
  SiVuedotjs,
  SiLaravel,
  SiPhp,
  SiPython,
  SiFlask,
  SiDjango,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGithub,
  SiGit,
  SiGitlab,
  SiFigma,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiBootstrap,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiSass,
  SiFirebase,
  SiCloudflare,
  SiPostman,
  SiJira,
  SiNetlify,
  SiVercel,
  SiSpring,
  SiSwagger,
  SiClickup,
  SiIntellijidea,
  SiArgo,
  SiRancher,
  SiApachenifi,
  SiDiagramsdotnet,
  SiFlutter,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

const iconMap: Record<string, { icon: IconType; color: string }> = {
  // Frontend
  'React.js': { icon: SiReact, color: '#61DAFB' },
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#111111' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  'TypeScript OOP': { icon: SiTypescript, color: '#3178C6' },
  OOP: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  'Material UI': { icon: SiMui, color: '#007FFF' },
  'Vue.js': { icon: SiVuedotjs, color: '#42B883' },
  'Flutter (Basic)': { icon: SiFlutter, color: '#02569B' },
  Flutter: { icon: SiFlutter, color: '#02569B' },
  Bootstrap: { icon: SiBootstrap, color: '#7952B3' },
  'Bootstrap 5': { icon: SiBootstrap, color: '#7952B3' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  HTML: { icon: SiHtml5, color: '#E34F26' },
  HTML5: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss, color: '#1572B6' },
  CSS3: { icon: SiCss, color: '#1572B6' },
  SASS: { icon: SiSass, color: '#CC6699' },

  // Backend & languages
  Laravel: { icon: SiLaravel, color: '#FF2D20' },
  PHP: { icon: SiPhp, color: '#777BB4' },
  Python: { icon: SiPython, color: '#3776AB' },
  'Python Algorithms': { icon: SiPython, color: '#3776AB' },
  Flask: { icon: SiFlask, color: '#000000' },
  Django: { icon: SiDjango, color: '#092E20' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  Java: { icon: DiJava, color: '#007396' },
  'Java Spring Boot': { icon: SiSpring, color: '#6DB33F' },
  'Spring Boot': { icon: SiSpring, color: '#6DB33F' },
  'REST API': { icon: SiSwagger, color: '#85EA2D' },
  Swagger: { icon: SiSwagger, color: '#85EA2D' },

  // Data
  MySQL: { icon: SiMysql, color: '#4479A1' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  SQLite: { icon: SiSqlite, color: '#003B57' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },

  // Tools & DevOps
  Figma: { icon: SiFigma, color: '#F24E1E' },
  ClickUp: { icon: SiClickup, color: '#7B68EE' },
  Git: { icon: SiGit, color: '#F05032' },
  GitHub: { icon: SiGithub, color: '#181717' },
  'Git/GitHub': { icon: SiGithub, color: '#181717' },
  GitLab: { icon: SiGitlab, color: '#FC6D26' },
  'GitLab CI': { icon: SiGitlab, color: '#FC6D26' },
  'IntelliJ IDEA': { icon: SiIntellijidea, color: '#000000' },
  'VS Code': { icon: VscVscode, color: '#007ACC' },
  Jira: { icon: SiJira, color: '#0052CC' },
  Postman: { icon: SiPostman, color: '#FF6C37' },
  Linux: { icon: SiLinux, color: '#FCC624' },
  Cloudflare: { icon: SiCloudflare, color: '#F38020' },
  Netlify: { icon: SiNetlify, color: '#00C7B7' },
  Vercel: { icon: SiVercel, color: '#111111' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  'Argo CD': { icon: SiArgo, color: '#EF7B4D' },
  Rancher: { icon: SiRancher, color: '#0075A8' },
  NiFi: { icon: SiApachenifi, color: '#728E9B' },
  'Draw.io': { icon: SiDiagramsdotnet, color: '#F08705' },
};

const DARK_MODE_INVERT = new Set(['#111111', '#000000']);

export function TechIcon({ name, size = 22 }: { name: string; size?: number }) {
  const theme = useTheme();
  const item = iconMap[name];
  // Keep static rendering safe even if a bundled icon export is unavailable.
  if (!item || typeof item.icon !== 'function') {
    return <CodeRoundedIcon sx={{ fontSize: size, color: 'text.secondary' }} />;
  }
  const Icon = item.icon;
  const adjusted =
      DARK_MODE_INVERT.has(item.color) && theme.palette.mode === 'dark' ? '#FFFFFF' : item.color;
  return <Icon size={size} color={adjusted} aria-hidden />;
}

export function TechnologyBadge({ name, compact = false }: { name: string; compact?: boolean }) {
  return (
    <Tooltip title={name} arrow>
      <Box
        component="span"
        sx={{
          minHeight: compact ? 36 : 44,
          px: compact ? 1.1 : 1.4,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.8,
          borderRadius: 1,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 1px 2px rgba(16,24,40,0.05)',
        }}
      >
        <TechIcon name={name} size={compact ? 18 : 21} />
        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', whiteSpace: 'nowrap' }}>
          {name}
        </Typography>
      </Box>
    </Tooltip>
  );
}
