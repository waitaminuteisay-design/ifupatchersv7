import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Download, 
  Shield, 
  Zap, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Video,
  CheckCircle,
  Info,
  Lock
} from 'lucide-react';

export default function Downloads() {
  const handleDownload = () => {
    window.open('https://ifuhelpers.github.io/IFU_Helpers.exe', '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-4">
          Télécharger IFU Helpers
        </h1>
        <p className="text-lg text-muted-foreground">
          Optimisez votre PC pour le gaming et le streaming
        </p>
      </div>

      {/* Technology Notice */}
      <Alert className="mb-8 border-primary/20 bg-primary/5">
        <Zap className="h-4 w-4 text-primary" />
        <AlertDescription>
          <strong>Technologie S.N.A.K.E :</strong> Système de sauvegarde automatique qui créé un fichier .IFUSAVE chaque semaine pour une restauration système ultra-rapide et légère.
        </AlertDescription>
      </Alert>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Download Card */}
        <div className="lg:col-span-2">
          <Card className="card-glow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">IFU Helpers v2.1</CardTitle>
              <CardDescription>
                Version complète avec toutes les fonctionnalités d'optimisation
              </CardDescription>
                <div className="flex justify-center gap-2 mt-4">
                <Badge variant="secondary">Windows 10/11</Badge>
                <Badge variant="outline">64-bit</Badge>
                <Badge className="bg-primary/20 text-primary">Gratuit</Badge>
                <Badge className="bg-accent/20 text-accent">S.N.A.K.E</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button 
                onClick={handleDownload}
                size="lg" 
                className="w-full glow-effect text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger IFU Helpers
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Taille : ~12 MB | Dernière mise à jour : Décembre 2024</p>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Téléchargement direct :</strong> Exécutable prêt à l'emploi<br />
                  <small>Hébergé sur GitHub Pages pour une sécurité maximale</small>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* System Requirements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              Configuration requise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Système d'exploitation</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  Windows 10 (1809+)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  Windows 11 (toutes versions)
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Hardware minimum</h4>
              <ul className="text-sm space-y-1">
                <li>• RAM : 4 GB minimum</li>
                <li>• Stockage : 50 MB libres</li>
                <li>• Processeur : x64 compatible</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Privilèges</h4>
              <p className="text-sm text-muted-foreground">
                Droits administrateur requis pour les optimisations système
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Overview */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Fonctionnalités incluses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Optimisation RAM</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Libération mémoire, nettoyage cache système et optimisation automatique
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
                <HardDrive className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Gestion Drivers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mise à jour automatique et réparation des pilotes système critiques
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Réparation DLL</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Détection et correction des bibliothèques système manquantes ou corrompues
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
                <Wifi className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Réseau Gaming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Optimisation TCP/IP, réduction latence et configuration DNS gaming
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Sécurité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Protection temps réel, scan malwares, firewall optimisé et technologie S.N.A.K.E qui créé automatiquement un fichier .IFUSAVE chaque semaine pour restauration système légère
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
                <Video className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Streaming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Optimisations spéciales OBS, encodage hardware et synchronisation A/V
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Installation Guide */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Guide d'installation</CardTitle>
          <CardDescription>Étapes simples pour installer IFU Helpers</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <Badge variant="outline" className="min-w-6 h-6 flex items-center justify-center">1</Badge>
              <div>
                <p className="font-medium">Télécharger l'archive</p>
                <p className="text-sm text-muted-foreground">Cliquez sur le bouton de téléchargement ci-dessus</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Badge variant="outline" className="min-w-6 h-6 flex items-center justify-center">2</Badge>
              <div>
                <p className="font-medium">Sauvegarder le fichier</p>
                <p className="text-sm text-muted-foreground">L'exécutable est téléchargé directement depuis GitHub Pages</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Badge variant="outline" className="min-w-6 h-6 flex items-center justify-center">3</Badge>
              <div>
                <p className="font-medium">Exécuter en tant qu'administrateur</p>
                <p className="text-sm text-muted-foreground">Clic droit sur IFU_Helpers.exe → "Exécuter en tant qu'administrateur"</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Badge variant="outline" className="min-w-6 h-6 flex items-center justify-center">4</Badge>
              <div>
                <p className="font-medium">Lancer l'optimisation</p>
                <p className="text-sm text-muted-foreground">Suivez les instructions à l'écran pour optimiser votre système</p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}