import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Target } from "lucide-react";

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    { id: "numbers", name: "Numbers", icon: Brain, description: "Practice number-based problems" },
    { id: "lcm-hcf", name: "LCM & HCF", icon: Target, description: "Master LCM and HCF calculations" },
    { id: "percentages", name: "Percentages", icon: Clock, description: "Solve percentage problems" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Aptitude Playground
          </h1>
          <p className="text-muted-foreground text-lg">
            Master Quantitative Aptitude with Dynamic Questions
          </p>
        </header>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Choose Your Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card
                  key={topic.id}
                  className="cursor-pointer hover:border-primary transition-all"
                  onClick={() => setSelectedTopic(topic.id)}
                >
                  <CardHeader>
                    <Icon className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle>{topic.name}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant={selectedTopic === topic.id ? "default" : "outline"}>
                      Start Practice
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {selectedTopic && (
          <section className="max-w-4xl mx-auto mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Practice Session</CardTitle>
                <CardDescription>
                  Topic: {topics.find(t => t.id === selectedTopic)?.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Questions will appear here. User tracking features (correct/wrong answers, study time, accuracy) coming soon!
                </p>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </main>
  );
};

export default Index;
