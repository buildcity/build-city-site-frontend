import { memo } from 'react';
import { X, Users, Github, ExternalLink, Beaker } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export interface LabProject {
  title: string;
  description: string;
  status: string;
  tech: string[];
  users: number;
  icon: React.ReactNode;
  detailedDescription?: string;
  features?: string[];
  repository?: string;
  demo?: string;
  timeline?: string;
  team?: string[];
}

interface ExpandableLabCardProps {
  project: LabProject;
  isExpanded: boolean;
  onExpand: (title: string) => void;
  onClose: () => void;
  colors: {
    border: string;
    bg: string;
    text: string;
  };
  getStatusColor: (status: string) => string;
}

const ExpandableLabCard = memo(({ 
  project, 
  isExpanded, 
  onExpand, 
  onClose, 
  colors, 
  getStatusColor 
}: ExpandableLabCardProps) => {
  const handleCardClick = () => {
    if (!isExpanded) {
      onExpand(project.title);
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (isExpanded) {
    return (
      <div 
        className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center p-2 sm:p-4 pt-4 sm:pt-20 overflow-y-auto"
        onClick={handleOverlayClick}
      >
        <div 
          className={`
            bg-gray-900 rounded-lg max-w-4xl w-full max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-6rem)] overflow-hidden
            transform transition-all duration-500 ease-out
            animate-slide-in-left flex flex-col my-auto sm:my-0 modal-container
          `}
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-700">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                <div className={`p-2 sm:p-3 bg-gray-800 rounded-lg border ${colors.border} flex-shrink-0`}>
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 truncate text-responsive">{project.title}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                        Development
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{project.users === 0 ? 'Work in progress' : `${project.users} users`}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCloseClick}
                className="text-gray-400 hover:text-white transition-colors p-1 sm:p-2 flex-shrink-0 ml-2"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="space-y-4 sm:space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-responsive">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Features</h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-300 text-sm sm:text-base">
                        <Beaker className="h-3 w-3 sm:h-4 sm:w-4 mt-1 text-orange-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className={`${colors.text} border-gray-600 text-xs sm:text-sm`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              {project.timeline && (
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Timeline</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{project.timeline}</p>
                </div>
              )}

              {/* Team */}
              {project.team && (
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Team Members</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.team.map((member) => (
                      <span key={member} className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-700">
                {project.repository && (
                  <Button 
                    variant="outline" 
                    className={`${colors.border} ${colors.text} hover:bg-gray-800 text-sm sm:text-base w-full sm:w-auto`}
                    onClick={() => window.open(project.repository, '_blank')}
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    View Repository
                  </Button>
                )}
                {project.demo && (
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm sm:text-base w-full sm:w-auto"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    View Demo
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-500 bg-gray-800/50 cursor-not-allowed hover:bg-gray-700 hover:scale-105 group relative transition-all duration-300 pointer-events-auto text-sm sm:text-base w-full sm:w-auto"
                  onClick={(e) => e.preventDefault()}
                >
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 group-hover:opacity-0 transition-opacity duration-300" />
                  <span className="group-hover:opacity-0 transition-opacity duration-300">Join Project</span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
                    Stay Tuned
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Collapsed card view
  return (
    <div 
      className={`bg-gray-900 border border-gray-700 p-4 sm:p-6 ${colors.bg} cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:bg-gray-800/50 rounded-lg shadow-lg hover:shadow-xl`}
      onClick={handleCardClick}
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
          <div className={`p-1.5 sm:p-2 bg-gray-800 rounded-lg border ${colors.border} transition-all duration-300 hover:scale-110 hover:bg-gray-700 flex-shrink-0`}>
            {project.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white transition-colors duration-300 hover:text-orange-400 truncate text-responsive">{project.title}</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 flex-shrink-0 ml-2">
          <Badge className={`${getStatusColor(project.status)} text-xs`}>
            {project.status}
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs hidden sm:inline-flex">
            Development
          </Badge>
        </div>
      </div>
      
      <p className="text-gray-300 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base text-responsive">
        {project.description}
      </p>
      
      <div className="mb-3 sm:mb-4">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className={`${colors.text} border-gray-600 transition-all duration-300 hover:border-orange-400 hover:text-orange-300 hover:scale-105 text-xs`}>
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="text-gray-400 border-gray-600 transition-all duration-300 hover:border-orange-400 hover:text-orange-300 text-xs">
              +{project.tech.length - 4} more
            </Badge>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400 text-sm">
          <Users className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>{project.users === 0 ? 'Work in progress' : `${project.users} users`}</span>
        </div>
        <Button 
          variant="outline" 
          className={`border-gray-600 text-gray-400 bg-gray-800/50 hover:bg-gray-700 hover:scale-110 transition-all duration-300 cursor-pointer ${colors.border.replace('border-', 'hover:border-')} ${colors.text.replace('text-', 'hover:text-')} hover:shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2`}
          onClick={handleCardClick}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
});

ExpandableLabCard.displayName = 'ExpandableLabCard';

export default ExpandableLabCard;
