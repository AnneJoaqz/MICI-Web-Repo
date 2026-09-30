import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MiciAgents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              MICI AGENTS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
            >
              Licensed Agents of Metropolitan Insurance Company, Inc.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl shadow-lg p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-accent-foreground" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Licensed Agents List
                  </h2>
                  <p className="text-muted-foreground">
                    Official list of MICI licensed agents.
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
  The current list of MICI licensed agents is available below for reference and verification.
</p>

                <div className="bg-muted/40 rounded-xl p-6 text-center">
                  <FileText className="w-10 h-10 mx-auto mb-3 text-accent" />
                  <p className="font-semibold text-foreground mb-2">
                    Licensed Agents List
                  </p>
                  <a
                    href="/MICI%20AGENTS%20as%20of%20September%2030%2C%202026.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent-foreground font-semibold px-5 py-3 rounded-xl transition"
                  >
                    <Download className="w-5 h-5" />
                    Download Licensed Agents List
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MiciAgents;
