import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { 
  Cpu, 
  HardDrive, 
  Wifi, 
  Shield, 
  Video, 
  AlertTriangle,
  CheckCircle,
  Zap,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Global() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          IFU Helpers - Optimisation Gaming
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Solution complète d'optimisation système spécialement conçue pour les streamers et gamers. 
          Améliorez vos performances, corrigez les problèmes système et optimisez votre expérience gaming.
        </p>
      </div>

      {/* Alerts Section */}
      <div className="mb-8 space-y-4">
        <Alert className="border-primary/20 bg-primary/5">
          <CheckCircle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-primary-foreground">
            <strong>Nouveau :</strong> Support Windows 11 23H2 et optimisations spéciales pour les processeurs AMD Ryzen 7000 series
          </AlertDescription>
        </Alert>
        
        <Alert className="border-accent/20 bg-accent/5">
          <Zap className="h-4 w-4 text-accent" />
          <AlertDescription>
            <strong>Performance boost :</strong> Jusqu'à 25% d'amélioration FPS sur les jeux populaires après optimisation
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* RAM Optimization */}
        <Card className="card-glow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Optimisation RAM</CardTitle>
                <Badge variant="secondary">Core Feature</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Nettoyage mémoire automatique
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Libération cache système
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Optimisation swap/pagefile
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Drivers */}
        <Card className="card-glow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <HardDrive className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-lg">Gestion Drivers</CardTitle>
                <Badge variant="outline">Automatique</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Mise à jour pilotes GPU
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Réparation drivers corrompus
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Sauvegarde automatique
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* DLL Management */}
        <Card className="card-glow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Réparation DLL</CardTitle>
                <Badge variant="secondary">Essentiel</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Scan fichiers manquants
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Réparation automatique
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Registre système optimisé
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Network */}
        <Card className="card-glow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Wifi className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-lg">Optimisation Réseau</CardTitle>
                <Badge variant="outline">Gaming</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Réduction latence (ping)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                TCP/IP optimization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                DNS Gaming optimisé
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="card-glow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Sécurité Système</CardTitle>
                <Badge variant="secondary">Protection</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Scan malwares gaming
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Firewall optimisé jeux
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Protection temps réel
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Protection fichiers système
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Streamers */}
        <Card className="card-glow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Video className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-lg">Spécial Streamers</CardTitle>
                <Badge variant="outline">Pro</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Optimisation OBS/XSplit
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Encodage hardware
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Audio/Video sync
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Important Warning */}
      <Alert className="mb-8 border-destructive/20 bg-destructive/5">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <AlertDescription className="text-destructive-foreground">
          <strong>Important :</strong> Créez toujours un point de restauration système avant d'utiliser IFU Helpers. 
          Bien que sûr, il est recommandé de sauvegarder vos données importantes.
        </AlertDescription>
      </Alert>

      {/* CTA Section */}
      <div className="text-center">
        <div className="inline-flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h2 className="text-2xl font-bold gradient-text">Prêt à optimiser votre setup gaming ?</h2>
          <p className="text-muted-foreground max-w-md">
            Téléchargez IFU Helpers et découvrez toutes ses fonctionnalités avancées
          </p>
          <Button size="lg" className="glow-effect" asChild>
            <Link to="/downloads">
              Voir les téléchargements
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}